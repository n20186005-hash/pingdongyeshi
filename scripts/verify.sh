#!/usr/bin/env bash
set -euo pipefail

rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build


if grep -RInE 'example\\.com|localhost|chrome-extension://' dist; then
  echo 'Forbidden placeholder/injected URL found in dist.' >&2
  exit 1
fi

if [[ -f dist/sitemap-index.xml || -f dist/sitemap-0.xml ]]; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml; then
    echo 'Unexpected lastmod found in sitemap.' >&2
    exit 1
  fi
fi

echo 'All verification steps passed.'
