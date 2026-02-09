# 张云阶 - 云计算工程师个人简历网站

## 🌟 项目简介

这是一个专为云计算技术应用专业学生打造的高端个人简历网站，采用现代化的设计理念和前沿的 Web 技术栈。网站以极简主义和赛博专业感为设计核心，完美展现了云原生领域的技术深度。

### ✨ 核心特性

- **🎨 设计风格**：极简、高级感、赛博专业风格
- **🌈 视觉效果**：玻璃拟态 (Glassmorphism) 设计语言
- **🎭 动画交互**：Framer Motion 流畅动画，3D 倾斜效果
- **📱 响应式设计**：完美适配 Mobile/Tablet/Desktop
- **🌓 主题切换**：支持深色/浅色模式切换
- **⚡ 性能优化**：基于 Next.js 15，支持 SSR 和静态生成
- **🚀 一键部署**：完美兼容 Vercel 部署平台

## 🛠️ 技术栈

### 框架与库
- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架

### 动画与交互
- **Framer Motion** - 强大的 React 动画库
- **React Type Animation** - 打字机效果
- **Lucide React** - 现代化图标库

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - 自动添加浏览器前缀

## 📦 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务器

```bash
npm start
```

## 🚀 部署到 Vercel

### 方式一：通过 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 登录并部署：
```bash
vercel
```

3. 按照提示完成部署配置

### 方式二：通过 Git 集成

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的 Git 仓库
4. Vercel 会自动检测 Next.js 项目并完成部署

## 📂 项目结构

```
个人简历网站/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 主页面
│   └── globals.css          # 全局样式
├── components/              # React 组件
│   ├── ThemeProvider.tsx    # 主题切换提供者
│   ├── PageLoader.tsx       # 页面加载器
│   ├── Navbar.tsx           # 导航栏
│   ├── HeroSection.tsx      # 首屏区域
│   ├── EducationSection.tsx # 教育背景
│   ├── SkillsSection.tsx    # 技能专长
│   ├── ProjectsSection.tsx  # 项目经历
│   └── ContactSection.tsx   # 联系方式
├── public/                  # 静态资源
├── tailwind.config.ts       # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
├── next.config.js           # Next.js 配置
└── package.json             # 项目依赖
```

## 🎨 自定义配置

### 修改个人信息

所有个人信息都集中在各个组件中，你可以根据需要修改：

1. **基本信息**：在 `components/HeroSection.tsx` 中修改姓名、头衔等
2. **教育背景**：在 `components/EducationSection.tsx` 中修改学校、专业等
3. **技能列表**：在 `components/SkillsSection.tsx` 中修改技能分类
4. **项目经历**：在 `components/ProjectsSection.tsx` 中添加/修改项目
5. **联系方式**：在 `components/ContactSection.tsx` 中修改社交链接

### 修改配色方案

在 `tailwind.config.ts` 中可以自定义颜色：

```typescript
colors: {
  primary: {
    DEFAULT: "#0070f3",  // 主色调
    dark: "#0051cc",     // 深色主色调
  },
  // ... 其他颜色配置
}
```

### 修改字体

在 `app/layout.tsx` 中修改 Google Fonts 链接，或在 `tailwind.config.ts` 中更改字体系列。

## 🌟 核心功能详解

### 1. 页面加载动画
- 0-100% 进度条显示
- "Initializing Cloud Environment..." 控制台风格文字
- 平滑淡出效果

### 2. 导航栏特性
- 滚动时自动切换毛玻璃效果
- 响应式移动端抽屉菜单
- 主题切换按钮（带旋转动画）
- 简历下载按钮（流光效果）

### 3. Hero 区域
- 动态打字机效果循环显示多个身份标签
- 抽象云计算拓扑 SVG 动画
- 动态渐变背景气泡动画

### 4. 技能卡片
- 3D 倾斜效果 (Tilt Effect)
- 悬停时渐变背景叠加
- 图标旋转动画
- 流光扫过效果

### 5. 项目展示
- 网格动画背景
- STAR 原则描述
- 技术标签徽章
- GitHub 和在线预览链接

### 6. 社交卡片
- 点击自动复制功能
- 复制成功的 Toast 提示
- 悬停上浮动画
- 渐变图标背景

## 🔧 常见问题

### Q: 如何更换背景颜色？
A: 修改 `app/globals.css` 中的 CSS 变量或 `tailwind.config.ts` 中的颜色配置。

### Q: 如何添加更多页面？
A: 在 `app` 目录下创建新的文件夹和 `page.tsx` 文件，Next.js 会自动处理路由。

### Q: 动画效果卡顿怎么办？
A: 检查是否启用了硬件加速，可以在 Chrome DevTools 中查看性能指标。

### Q: 如何适配移动端？
A: 项目已采用响应式设计，使用 Tailwind 的断点系统 (sm/md/lg/xl)。

## 📄 License

MIT License - 可自由使用和修改

## 👨‍💻 作者

**张云阶 (Zhang Yunjie)**
- 重庆商务职业学院 · 云计算技术应用专业
- Email: yunjie.cloud@example.com
- GitHub: [github.com](https://github.com)

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 强大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Framer Motion](https://www.framer.com/motion/) - 流畅的动画库
- [Lucide Icons](https://lucide.dev/) - 精美的图标库
- [Vercel](https://vercel.com/) - 优秀的部署平台

---

⭐ 如果这个项目对你有帮助，欢迎 Star 支持！
