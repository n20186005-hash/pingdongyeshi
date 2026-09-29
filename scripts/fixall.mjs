import { readFileSync, writeFileSync, mkdirSync, existsSync, appendFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { dirname } from 'node:path';

const PROGRESS = 'H:/fixall-progress.txt';
const lock = readFileSync('pnpm-lock.yaml', 'utf8');
const lines = lock.split('\n');
const entries = [];
function parseEntry(line) {
  let s = line.replace(/\r$/, '').replace(/^ {2}/, '').trim();
  if (s.startsWith("'")) s = s.slice(1);
  if (s.endsWith("':")) s = s.slice(0, -2);
  else if (s.endsWith(':')) s = s.slice(0, -1);
  if (s.startsWith('@')) {
    const at = s.indexOf('@', 1);
    if (at === -1) return null;
    return { name: s.slice(0, at), version: s.slice(at + 1).split('(')[0] };
  }
  const at = s.indexOf('@');
  if (at === -1) return null;
  return { name: s.slice(0, at), version: s.slice(at + 1).split('(')[0] };
}
for (const line of lines) {
  const e = parseEntry(line);
  if (e && e.name && e.version) entries.push(e);
}
console.log('lockfile packages:', entries.length);

function extract(buf, dest) {
  let off = 0, count = 0;
  while (off + 512 <= buf.length) {
    const header = buf.subarray(off, off + 512);
    if (header[0] === 0) break;
    let nm = '';
    for (let i = 0; i < 100; i++) { if (header[i] === 0) break; nm += String.fromCharCode(header[i]); }
    let longName = null;
    if (nm === '././@LongLink') {
      const sz = parseInt(header.subarray(124, 136).toString().trim(), 8);
      off += 512; const d = buf.subarray(off, off + sz); let ln = '';
      for (let i = 0; i < sz; i++) { if (d[i] === 0) break; ln += String.fromCharCode(d[i]); }
      longName = ln; off += Math.ceil(sz / 512) * 512;
      const h2 = buf.subarray(off, off + 512); nm = '';
      for (let i = 0; i < 100; i++) { if (h2[i] === 0) break; nm += String.fromCharCode(h2[i]); }
    }
    const sizeStr = header.subarray(124, 136).toString().trim();
    const size = sizeStr ? parseInt(sizeStr, 8) : 0;
    const typeflag = header[156] === 0 ? '0' : String.fromCharCode(header[156]);
    off += 512;
    if (longName) nm = longName;
    if (typeflag === '5') { off += Math.ceil(size / 512) * 512; continue; }
    if (typeflag === '0' || typeflag === '7') {
      const fileData = buf.subarray(off, off + size);
      off += Math.ceil(size / 512) * 512;
      const outPath = dest + '/' + nm.replace(/^package\//, '');
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, fileData);
      count++;
    } else { off += Math.ceil(size / 512) * 512; }
  }
  return count;
}

let done = 0, skipped = 0, failed = 0;
const LIMIT = Number(process.env.FIXLIMIT || '40');
const FORCE = process.env.FORCE === '1';
let missingDone = 0;
for (const e of entries) {
  const dest = 'old-node_modules/' + e.name;
  if (!FORCE && existsSync(dest + '/package.json')) { skipped++; continue; }
  if (FORCE && existsSync(dest + '/.fixed')) { skipped++; continue; }
  try {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 25000);
    const meta = await fetch('https://registry.npmjs.org/' + e.name, { signal: ac.signal }).then((r) => r.json());
    const tarball = meta.versions[e.version].dist.tarball;
    const data = Buffer.from(await (await fetch(tarball, { signal: ac.signal })).arrayBuffer());
    clearTimeout(t);
    const buf = gunzipSync(data);
    const n = extract(buf, dest);
    if (FORCE) writeFileSync(dest + '/.fixed', '');
    done++;
    missingDone++;
    appendFileSync(PROGRESS, `OK ${e.name}@${e.version} (${n})\n`);
    if (missingDone >= LIMIT) { appendFileSync(PROGRESS, `CHUNK-LIMIT reached (${LIMIT})\n`); break; }
  } catch (err) {
    failed++;
    appendFileSync(PROGRESS, `FAIL ${e.name}@${e.version}: ${err.message}\n`);
  }
}
appendFileSync(PROGRESS, `SUMMARY done=${done} skipped=${skipped} failed=${failed}\n`);
console.log('DONE', done, skipped, failed);
