import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import { dirname } from 'node:path';

const name = process.argv[2];
if (!name) { console.log('usage: node fixpkg.mjs <pkgname>'); process.exit(1); }

const lock = await readFile('pnpm-lock.yaml', 'utf8');
// find 'name@version': entry in packages section
const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const re = new RegExp("^  (?:'" + esc + "'|" + esc + ")@([^\\s:']+):", 'm');
const m = lock.match(re);
if (!m) { console.log('version not found for', name); process.exit(1); }
const version = m[1];
console.log(name, '=>', version);

const meta = await fetch('https://registry.npmjs.org/' + name).then((r) => r.json());
const tarball = meta.versions[version].dist.tarball;
const data = Buffer.from(await (await fetch(tarball)).arrayBuffer());
const buf = gunzipSync(data);

const dest = 'old-node_modules/' + name;
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
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, fileData);
    count++;
  } else { off += Math.ceil(size / 512) * 512; }
}
console.log('extracted', count, 'files into', dest);
