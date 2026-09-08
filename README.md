# 屏東觀光夜市單頁網站

以屏東觀光夜市（民族路夜市）的「老字號小吃街＋霓虹招牌」氣質設計，使用繁體中文（台灣）單語內容。

## 技術

- Astro 7.3.1
- Tailwind CSS 4.3.3（`@tailwindcss/vite`）
- TypeScript 6.0.3（落在 `@astrojs/check 0.9.10` 支援的 `^5 || ^6` 範圍）
- pnpm 12.3.4
- Node.js 24.20.0 LTS
- Cloudflare Workers Static Assets / Wrangler 4.129.0
- GA4: `G-HXM22WWPKP`
- 無資料庫、無登入、無 CMS

## 唯一站點 URL 配置

只修改 `astro.config.mjs`：

```js
const site = undefined;
```

域名確定後改成正式 HTTPS URL，例如：

```js
const site = 'https://your-domain.tw';
```

项目在 `site` 为空时仍应正常构建：
- 不输出 canonical / `og:url`
- JSON-LD 不写站点 `url`
- `@astrojs/sitemap` 不启用，因此不会生成含占位域名的 sitemap

## Cloudflare Workers

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

`wrangler.jsonc` 使用 Workers Static Assets 直接部署 `dist/`，不需要数据库或服务端状态。

## 照片

见 `IMAGE-SOURCES.md`。页面只引用与屏东观光夜市直接相关的真实实景照片，不使用 AI 生成景点照。Logo、favicon、纹理全部已本地化。
