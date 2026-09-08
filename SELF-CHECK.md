# 交付前自檢狀態

## 已完成的離線檢查

- 單包專案：不存在 `pnpm-workspace.yaml`。
- `package.json` 全部使用精確版本，無 `latest`、`*` 或浮動 semver。
- `packageManager` 固定 `pnpm@12.3.4`。
- `engines.node` 與 `.node-version` 均固定為 `24.20.0`。
- `site` 只在 `astro.config.mjs` 一處配置；目前為空，sitemap 整合條件停用。
- 原始碼未發現 `example.com`、`localhost`、`chrome-extension://`。
- 未手寫 sitemap `<url>` / `<lastmod>`，未加入內容型「最後核對日期」。
- GA4、JSON-LD（TouristAttraction / LocalBusiness / FAQPage）、本地語系地圖、logo 與常用 favicon 尺寸均已存在。

## 本次執行環境無法完成的硬性步驟

本工作容器只有 Node.js 22.16.0，且沒有 pnpm。執行 Corepack 取得 `pnpm@12.3.4` 時，對 `registry.npmjs.org` 的下載請求被此環境的外網限制阻斷。因此無法在本容器中下載依賴，也無法誠實生成與依賴圖同步的 `pnpm-lock.yaml`。

所以以下步驟 **沒有宣稱通過**：

1. `CI=1 corepack pnpm install --frozen-lockfile`
2. `pnpm check`
3. `pnpm build`
4. 對實際 `dist/` 的 grep / sitemap 成品檢查

`scripts/verify.sh` 已把要求的完整驗證流程寫好；在可連線 npm registry、且先生成/提交真正 `pnpm-lock.yaml` 的環境中可直接執行。

> 為避免製造「看起來完整但 frozen install 一定失敗」的假象，本包刻意不偽造 `pnpm-lock.yaml`。這代表目前是「待網路環境完成依賴鎖定與 CI 驗證的源碼包」，不是已完成全部硬性驗證的最終 CI 成品。
