# Todo工具官网（cl-todo-app-web）

静态介绍站，结构对齐 [网兜官网](../cl-network-disk-web)，部署到 **Cloudflare Pages**。

## 本地预览

```bash
npm install
npm run dev
```

或用任意静态服务器打开本目录：

```bash
npx --yes serve .
```

## 配置（读核销系统）

下载地址、权益对比、联系方式、关于文案均来自 **cl-license**，不写死在官网里。

### GitHub Releases（与网兜相同）

APK 由 Android 工程打包并推送，详见 **`cl-todo-app/README.md`**「打包与发版」：

1. 在 `cl-todo-app` 改 `versionName` → 双击 `打包APK.bat` → 手机安装测试  
2. 测试通过后双击 `推送Releases.bat`（上传到 `xiaochenbian-new/todo-releases`）  
3. 核销后台 Todo → 下载配置：填 **最新版本号**（与 `versionName` 一致，不加 `v`）并保存  

Release 文件名默认：`todo-{版本}.apk`（如 `todo-1.0.0.apk`，tag `v1.0.0`）。

`config.js` 只保留核销站地址：

```js
window.TODO_SITE = {
  licenseApi: "https://cl-license.pages.dev",
  appId: "todo",
  downloads: []
};
```

## 部署到 Cloudflare Pages

需已 `wrangler login`：

```bash
npm install
npm run deploy
# 等价：npx wrangler pages deploy . --project-name=cl-todo-app-web
```

线上地址：https://cl-todo-app-web.pages.dev/

## 远程仓库

与网兜官网相同，双远程：

| remote | 地址 |
|--------|------|
| `origin`（Gitee） | https://gitee.com/xiaochenbian/cl-todo-app-web |
| `github` | https://github.com/xiaochenbian-new/cl-todo-app-web |

首次克隆后推送：

```bash
git push -u origin main
git push -u github main
```

## 部署到 GitHub Pages（可选）

仓库 **Settings → Pages**：Source 选 `Deploy from a branch`，分支 `main`，目录 `/`。  
访问：https://xiaochenbian-new.github.io/cl-todo-app-web/  
已包含 `.nojekyll`。

## 页面结构

| 文件 | 说明 |
|------|------|
| `index.html` | 首页（品牌 / 功能 / VIP / 下载） |
| `styles.css` | 样式（品牌绿 `#2DBE60`） |
| `config.js` | 核销 API 与 appId |
| `main.js` | 拉取 `/api/plans` 并填充页面 |
| `assets/app-icon.png` | 应用图标 |
