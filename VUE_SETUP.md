# Vue 版本启动指南

## ⚠️ 重要说明

本项目已从 **React/Next.js** 迁移到 **Vue 3 + Vite**！

## 📦 安装依赖

由于依赖包已更换，请先删除旧的依赖并重新安装：

```bash
# 1. 删除旧的 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 2. 使用新的 package.json 安装依赖
cp package.vue.json package.json
npm install
```

## 🚀 启动项目

### 开发模式

```bash
npm run dev
```

访问: http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 新的项目结构

```
个人简历网站/
├── src/                         # 【Vue 源代码】
│   ├── main.ts                 # Vue 应用入口
│   ├── App.vue                 # 根组件
│   ├── style.css               # 全局样式
│   ├── components/             # Vue 组件
│   │   ├── PageLoader.vue
│   │   ├── Navbar.vue
│   │   ├── HeroSection.vue
│   │   ├── TransitionSection.vue
│   │   ├── EducationSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactSection.vue
│   ├── stores/                 # Pinia 状态管理
│   │   └── theme.ts
│   └── router/                 # Vue Router
│       └── index.ts
├── public/                     # 静态资源
├── index.html                  # HTML 入口
├── vite.config.ts              # Vite 配置
├── tailwind.config.ts          # Tailwind 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 依赖配置
```

## 🔄 主要变化

### 技术栈对比

| 原 React 版本 | 新 Vue 版本 |
|--------------|------------|
| Next.js 15 | Vue 3 + Vite |
| React 19 | Vue 3.4 |
| Framer Motion | @vueuse/motion |
| lucide-react | lucide-vue-next |
| - | Vue Router 4 |
| - | Pinia |
| react-type-animation | 自实现打字机效果 |

### 命令变化

| 功能 | React 版本 | Vue 版本 |
|------|-----------|----------|
| 开发服务器 | `npm run dev` | `npm run dev` |
| 构建 | `npm run build` | `npm run build` |
| 生产服务器 | `npm start` | `npm run preview` |

## ✨ 新功能

1. **更快的开发体验** - Vite 提供极速的 HMR
2. **Composition API** - 使用 Vue 3 最新的组合式 API
3. **Pinia 状态管理** - 轻量级的状态管理方案
4. **@vueuse/motion** - 强大的动画库
5. **TypeScript 支持** - 完整的类型推导

## 🎨 所有功能保持一致

- ✅ 浅色/深色主题切换
- ✅ 页面加载动画
- ✅ 打字机效果
- ✅ 滚动过渡动画（大卡片分裂成小卡片）
- ✅ 响应式设计
- ✅ 玻璃拟态效果
- ✅ 所有组件和内容

## 🐛 故障排除

### 问题: 依赖安装失败

```bash
# 清除 npm 缓存
npm cache clean --force

# 重新安装
npm install
```

### 问题: 端口被占用

修改 `vite.config.ts` 中的端口号：

```ts
server: {
  port: 3001, // 改为其他端口
}
```

## 📝 开发建议

1. **Vue DevTools**: 安装 Vue DevTools 浏览器扩展进行调试
2. **Volar**: 使用 Volar (Vue Language Features) VSCode 扩展
3. **禁用 Vetur**: 如果安装了 Vetur,请禁用它以避免冲突

---

**注意**: 原 React 版本的文件（app/, components/ 等）仍然保留，但新项目使用 `src/` 目录下的 Vue 代码。
