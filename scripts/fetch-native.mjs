import { writeFile, mkdir } from 'node:fs/promises';

const items = [
  { name: '@esbuild/win32-x64', version: '0.28.2', dir: 'node_modules/@esbuild/win32-x64' },
  { name: '@tailwindcss/oxide-win32-x64-msvc', version: '4.3.3', dir: 'node_modules/@tailwindcss/oxide-win32-x64-msvc' },
  { name: '@astrojs/compiler-binding-win32-x64-msvc', version: '0.4.0', dir: 'node_modules/@astrojs/compiler-binding-win32-x64-msvc' },
];

for (const it of items) {
  const meta = await fetch('https://registry.npmjs.org/' + it.name).then((r) => r.json());
  const tarball = meta.versions[it.version].dist.tarball;
  const buf = Buffer.from(await (await fetch(tarball)).arrayBuffer());
  await mkdir('H:/tmp-native', { recursive: true });
  const tgz = `H:/tmp-native/${it.name.replace(/[@/]/g, '_')}.tgz`;
  await writeFile(tgz, buf);
  console.log('downloaded', it.name, it.version, buf.length, '->', tgz);
}
