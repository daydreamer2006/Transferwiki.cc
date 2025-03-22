const nextra = require("nextra");
 
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

// GitHub Pages 使用的配置
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY || '/Transferwiki.cc';
let basePath = '';
let assetPrefix = '';

// 如果在 GitHub Actions 中运行，并且是部署到 GitHub Pages
if (isGithubActions) {
  // 截取仓库名
  const repoName = repo.includes('/') ? repo.split('/')[1] : repo;
  // 设置基础路径为仓库名
  basePath = `/${repoName}`;
  // 设置资源前缀为仓库名加斜杠
  assetPrefix = `/${repoName}/`;
} else if (process.env.NODE_ENV === 'production') {
  // 本地生产环境，使用简单配置
  basePath = '/Transferwiki.cc';
  assetPrefix = '/Transferwiki.cc/';
}
 
module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath,
  assetPrefix,
  // 禁用 trailingSlash 以确保URL没有尾部斜杠
  trailingSlash: false,
});