# 开发指南

本文档提供了如何在本地运行和开发TransferWiki.cc网站的说明。

## 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

## 本地开发

1. 克隆仓库：

```bash
git clone https://github.com/your-username/Transferwiki.cc.git
cd Transferwiki.cc
```

2. 安装依赖：

```bash
npm install
# 或者
yarn install
```

3. 启动开发服务器：

```bash
npm run dev
# 或者
yarn dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 构建与部署

构建静态网站：

```bash
npm run build
# 或者
yarn build
```

构建完成后，生成的静态文件将位于 `out` 目录中。

## 项目结构

- `pages/`: 网站页面和内容
  - `pages/schools/`: 各学校页面
  - `pages/_meta.json`: 导航菜单配置
- `components/`: React组件
- `styles/`: CSS样式文件
- `public/`: 静态资源（图片等）
- `templates/`: 模板文件

## 添加新功能

1. 组件开发
   - 在 `components/` 目录下创建新组件
   - 组件应遵循React最佳实践
   - 使用TailwindCSS进行样式设计（以`nx-`前缀开始）

2. 页面开发
   - 在 `pages/` 目录下创建新的`.mdx`文件
   - 使用Markdown语法编写内容
   - 引入并使用组件
   - 更新 `_meta.json` 添加到导航

## 样式指南

- 使用TailwindCSS（以`nx-`前缀开始）
- 主题颜色：蓝色（主要）和白色（背景）
- 字体：Nunito（圆润易读）

## 自动部署

该项目使用GitHub Actions自动部署到GitHub Pages：

1. 每次推送到`main`分支时触发构建
2. GitHub Actions运行`npm run build`
3. 构建结果部署到GitHub Pages

具体配置见`.github/workflows/deploy.yml`文件。