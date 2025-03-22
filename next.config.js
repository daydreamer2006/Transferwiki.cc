const nextra = require("nextra");
 
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

// GitHub Pages 使用的配置
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY || '/Transferwiki.cc';

module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  // 自定义域名时不需要basePath和assetPrefix
  basePath: '',
  assetPrefix: '',
  // 禁用 trailingSlash 以确保URL没有尾部斜杠
  trailingSlash: false,
});