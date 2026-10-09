/**
 * Todo 官网链接配置
 * 核销 API：生产 → license.wangdou.win；测试（GitHub Pages / main.* Preview）→ main.cl-license.pages.dev
 */
(function () {
  function isTestHost(hostname) {
    var h = String(hostname || "").toLowerCase();
    if (!h) return false;
    if (h === "localhost" || h === "127.0.0.1") return true;
    if (h.indexOf("github.io") !== -1) return true;
    if (h.indexOf("main.") === 0) return true;
    return false;
  }

  var test = typeof location !== "undefined" && isTestHost(location.hostname);
  window.TODO_SITE = {
    licenseApi: test
      ? "https://main.cl-license.pages.dev"
      : "https://license.wangdou.win",
    appId: "todo",
    downloads: [],
    githubUrl: "https://github.com/xiaochenbian-new/cl-todo-app-web",
    giteeUrl: "https://gitee.com/xiaochenbian/cl-todo-app-web",
    cloudflareUrl: "https://cl-todo-app-web.pages.dev/"
  };
})();
