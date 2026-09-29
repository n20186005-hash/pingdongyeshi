import { writeFile, mkdir } from 'node:fs/promises';

const items = [
  { name: 'astro', version: '7.3.1', dir: 'old-node_modules/astro' },
  { name: '@rolldown/binding-win32-x64-msvc', version: '1.2.7', dir: 'old-node_modules/@rolldown/binding-win32-x64-msvc' },
];

for (const it of items) {
  const meta = await fetch('https://registry.npmjs.org/' + it.name).then((r) => r.json());
  const tarball = meta.versions[it.version].dist.tarball;
  const buf = Buffer.from(await (await fetch(tarball)).arrayBuffer());
  await writeFile(`H:/tmp-native/${it.name.replace(/[@/]/g, '_')}.tgz`, buf);
  console.log('downloaded', it.name, it.version, buf.length);
}
