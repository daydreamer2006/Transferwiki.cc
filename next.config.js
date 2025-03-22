const nextra = require("nextra");
 
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});
 
module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Transferwiki.cc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Transferwiki.cc/' : '',
});