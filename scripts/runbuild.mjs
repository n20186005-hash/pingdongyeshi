import { cli } from '../old-node_modules/astro/dist/cli/index.js';

try {
  await cli(process.argv);
  process.exitCode = 0;
} catch (e) {
  console.error('BUILD_ERROR:', e);
  if (e && e.stack) console.error(e.stack);
  process.exitCode = 1;
}
await new Promise((r) => setImmediate(r));
