import { readFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const [tgz, dest, stripRaw] = process.argv.slice(2);
const strip = Number(stripRaw || '1');

const gz = await readFile(tgz);
const buf = gunzipSync(gz);
let off = 0;
let count = 0;
while (off + 512 <= buf.length) {
  const header = buf.subarray(off, off + 512);
  if (header[0] === 0) break; // end of archive
  let name = '';
  for (let i = 0; i < 100; i++) { if (header[i] === 0) break; name += String.fromCharCode(header[i]); }
  // handle GNU long name
  let longName = null;
  if (name === '././@LongLink') {
    let ln = '';
    const size = parseInt(header.subarray(124, 136).toString().trim(), 8);
    off += 512;
    const data = buf.subarray(off, off + size);
    for (let i = 0; i < size; i++) { if (data[i] === 0) break; ln += String.fromCharCode(data[i]); }
    longName = ln; off += Math.ceil(size / 512) * 512;
    // re-read next header for the real entry
    const h2 = buf.subarray(off, off + 512);
    name = '';
    for (let i = 0; i < 100; i++) { if (h2[i] === 0) break; name += String.fromCharCode(h2[i]); }
  }
  const sizeStr = header.subarray(124, 136).toString().trim();
  const size = sizeStr ? parseInt(sizeStr, 8) : 0;
  const typeflag = header[156] === 0 ? '0' : String.fromCharCode(header[156]);
  off += 512;
  if (longName) name = longName;
  if (typeflag === '5') { // directory
    off += Math.ceil(size / 512) * 512;
    continue;
  }
  if (typeflag === '0' || typeflag === '7') {
    const data = buf.subarray(off, off + size);
    off += Math.ceil(size / 512) * 512;
    let rel = name;
    if (strip > 0) {
      const parts = name.split('/');
      rel = parts.slice(strip).join('/');
    }
    if (!rel) continue;
    const outPath = dest + '/' + rel;
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, data);
    count++;
  } else {
    off += Math.ceil(size / 512) * 512;
  }
}
console.log('extracted', count, 'files to', dest);
