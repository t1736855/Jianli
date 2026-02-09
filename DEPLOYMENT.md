# 🚀 部署指南

本指南将帮助您将个人简历网站部署到 Vercel 平台。

## 📋 部署前准备

### 1. 确保项目可以正常运行

在部署之前，请在本地测试：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本（测试是否有构建错误）
npm run build
```

访问 http://localhost:3000 确认网站正常显示。

### 2. 检查配置文件

确保以下文件存在且配置正确：
- ✅ `package.json` - 包含正确的 scripts 命令
- ✅ `next.config.js` - Next.js 配置文件
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `.gitignore` - 忽略不需要的文件

## 🌐 方式一：通过 Vercel 网页部署（推荐）

### Step 1: 创建 Git 仓库

如果还没有 Git 仓库，请先创建：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Cloud Computing Portfolio"

# 关联远程仓库（GitHub/GitLab/Bitbucket）
git remote add origin YOUR_REPOSITORY_URL

# 推送代码
git push -u origin main
```

### Step 2: 导入到 Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录（可使用 GitHub 账号）
2. 点击 **"Add New Project"**
3. 从 Git 仓库导入项目
4. 选择您的仓库（如：`username/portfolio`）
5. Vercel 会自动检测 Next.js 项目

### Step 3: 配置项目

Vercel 会自动配置大部分选项，确认以下设置：

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Step 4: 部署

点击 **"Deploy"** 按钮，等待 1-2 分钟。

部署成功后，您将获得：
- 🌐 生产环境 URL：`https://your-project.vercel.app`
- 🔗 自定义域名配置（可选）

## 💻 方式二：通过 Vercel CLI 部署

### Step 1: 安装 Vercel CLI

```bash
npm install -g vercel
```

### Step 2: 登录 Vercel

```bash
vercel login
```

按照提示完成登录（支持 GitHub/GitLab/Bitbucket/Email）。

### Step 3: 部署项目

在项目根目录执行：

```bash
vercel
```

首次部署时，CLI 会询问一些问题：

```
? Set up and deploy "~/个人简历网站"? [Y/n] Y
? Which scope do you want to deploy to? Your Name
? Link to existing project? [y/N] N
? What's your project's name? yunjie-portfolio
? In which directory is your code located? ./
```

### Step 4: 生产部署

开发测试通过后，执行生产部署：

```bash
vercel --prod
```

## 🎯 部署后配置

### 1. 自定义域名

1. 在 Vercel 项目设置中选择 **"Domains"**
2. 添加您的域名（如：`zhangyunjie.com`）
3. 根据提示配置 DNS 记录

DNS 配置示例（以阿里云为例）：
```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
```

### 2. 环境变量

如果项目使用环境变量，在 Vercel 设置中添加：

1. 进入项目 **"Settings"** → **"Environment Variables"**
2. 添加所需的环境变量
3. 重新部署项目

### 3. 性能优化建议

Vercel 已自动提供以下优化：
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 图片优化
- ✅ 静态资源缓存
- ✅ Gzip/Brotli 压缩

## 🔄 自动部署

### GitHub 集成自动部署

一旦通过 Git 集成部署，每次推送到主分支都会自动触发部署：

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel 会自动：
1. 检测到代码变更
2. 构建新版本
3. 部署到生产环境
4. 发送部署通知

### 分支预览

推送到非主分支会创建预览部署：

```bash
git checkout -b feature/new-section
git add .
git commit -m "Add new section"
git push origin feature/new-section
```

Vercel 会为此分支创建独立的预览 URL。

## 🛠️ 常见问题

### Q1: 构建失败怎么办？

检查 Vercel 构建日志，常见原因：
- TypeScript 类型错误
- 缺少依赖包
- 环境变量未配置

本地先执行 `npm run build` 确保可以构建成功。

### Q2: 页面显示 404

确保：
- 路由配置正确
- 使用的是 Next.js App Router（`app/` 目录）
- 重新部署项目

### Q3: 样式加载失败

检查：
- Tailwind CSS 配置是否正确
- `globals.css` 是否在 `layout.tsx` 中引入
- PostCSS 配置是否存在

### Q4: 动画不流畅

这可能是客户端性能问题，在生产环境通常会更好：
- 使用 Chrome Lighthouse 检测性能
- 减少不必要的动画
- 使用 CSS transform 而非 position

## 📊 监控与分析

### Vercel Analytics

启用 Vercel Analytics 追踪网站性能：

1. 在项目设置中启用 **"Analytics"**
2. 在 `app/layout.tsx` 中添加：

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 性能指标

关注以下核心指标：
- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **FID** (First Input Delay): < 100ms

## 🔐 安全建议

1. **不要提交敏感信息**
   - 使用 `.gitignore` 忽略 `.env` 文件
   - 使用 Vercel 环境变量管理密钥

2. **启用 HTTPS**（Vercel 默认启用）

3. **设置安全头部**
   在 `next.config.js` 中配置：

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

## 📈 后续优化

### SEO 优化
- ✅ 已配置 Meta 标签
- ✅ 已配置 OpenGraph
- 📝 建议添加 `sitemap.xml`
- 📝 建议添加 `robots.txt`

### 性能优化
- 使用 Next.js Image 组件优化图片
- 启用增量静态生成 (ISR)
- 配置缓存策略

## 🎉 部署完成

恭喜！您的个人简历网站已成功部署。

- 🌐 访问您的网站
- 📱 在多设备测试
- 🔗 分享给朋友
- 📊 关注访问数据

有任何问题，欢迎查看 [Vercel 官方文档](https://vercel.com/docs)。

---

**Happy Deploying! 🚀**
