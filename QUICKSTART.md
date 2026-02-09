# ⚡ 快速开始指南

欢迎使用云计算工程师个人简历网站模板！按照以下步骤快速启动您的个人网站。

## 🎯 第一步：安装依赖

打开终端（PowerShell/CMD），进入项目目录，运行：

```bash
npm install
```

⏱️ 预计需要 1-2 分钟完成安装。

## 🚀 第二步：启动开发服务器

```bash
npm run dev
```

看到以下信息表示启动成功：

```
✓ Ready in 20s
- Local:   http://localhost:3000
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## ✏️ 第三步：自定义您的信息

### 1. 修改个人基本信息

编辑 `components/HeroSection.tsx`：

```typescript
// 修改姓名
<span className="block text-white">你的姓名</span>
<span className="block gradient-text mt-2">Your Name</span>

// 修改简介
<p className="text-gray-400 text-lg leading-relaxed max-w-xl">
  这里填写您的个人简介...
</p>

// 修改联系方式
<Mail className="w-5 h-5 text-primary" />
<span>your.email@example.com</span>
```

### 2. 修改教育背景

编辑 `components/EducationSection.tsx`：

```typescript
const education = {
  school: "你的学校名称",
  englishName: "Your University Name",
  major: "你的专业",
  period: "2023 - 2026",
  honors: [
    "你的荣誉1",
    "你的荣誉2",
  ],
  courses: [
    "核心课程1",
    "核心课程2",
    // ... 更多课程
  ],
};
```

### 3. 修改技能列表

编辑 `components/SkillsSection.tsx`：

```typescript
const skillCategories = [
  {
    icon: Cloud,
    title: "技能分类名称",
    subtitle: "英文名称",
    skills: ["技能1", "技能2", "技能3", "技能4"],
    color: "from-blue-500 to-cyan-500",
  },
  // ... 更多技能分类
];
```

### 4. 添加/修改项目

编辑 `components/ProjectsSection.tsx`：

```typescript
const projects = [
  {
    title: "项目名称",
    subtitle: "Project Name",
    description: "项目描述...",
    highlights: [
      "项目亮点1",
      "项目亮点2",
    ],
    tech: ["技术1", "技术2", "技术3"],
    github: "https://github.com/yourname/project",
    demo: "https://your-demo-url.com",
    gradient: "from-blue-500 to-purple-500",
  },
  // ... 更多项目
];
```

### 5. 修改联系方式

编辑 `components/ContactSection.tsx`：

```typescript
const socialLinks = [
  {
    icon: MessageSquare,
    label: "微信",
    value: "你的微信号",
    copyable: true,
    color: "from-green-400 to-green-600",
  },
  {
    icon: Mail,
    label: "邮箱",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    copyable: true,
    color: "from-blue-400 to-blue-600",
  },
  // ... 更多联系方式
];
```

## 🎨 第四步：自定义配色（可选）

编辑 `tailwind.config.ts`：

```typescript
colors: {
  primary: {
    DEFAULT: "#0070f3",  // 改成你喜欢的主色调
    dark: "#0051cc",
  },
}
```

保存后，页面会自动刷新应用新的配色。

## 🌓 第五步：测试主题切换

点击导航栏右上角的太阳/月亮图标，测试深色/浅色模式切换。

## 📱 第六步：测试响应式

在浏览器中按 `F12` 打开开发者工具，点击设备工具栏图标（或按 `Ctrl+Shift+M`），测试不同设备尺寸：

- 📱 Mobile (375px)
- 📱 Tablet (768px)
- 💻 Desktop (1920px)

## 🔍 第七步：检查所有功能

确保以下功能正常：

- ✅ 页面加载动画（0-100%）
- ✅ 导航栏滚动时的毛玻璃效果
- ✅ Hero 区域的打字机效果
- ✅ 技能卡片的 3D 倾斜效果
- ✅ 项目卡片的悬停动画
- ✅ 联系卡片的复制功能（点击微信/邮箱卡片）
- ✅ 平滑滚动效果

## 🏗️ 第八步：构建生产版本

确认一切正常后，构建生产版本：

```bash
npm run build
```

如果构建成功（没有错误），说明项目可以部署了！

## 🚀 第九步：部署到 Vercel

详细部署步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

简单版本：
1. 访问 [vercel.com](https://vercel.com)
2. 登录并点击 "Add New Project"
3. 导入您的 Git 仓库
4. 点击 "Deploy"
5. 等待 1-2 分钟，完成！

## 💡 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器（需先构建）
npm start

# 代码检查
npm run lint
```

## 🆘 遇到问题？

### 问题 1：npm install 报错

**解决方案**：
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules
rm -rf node_modules

# 重新安装
npm install
```

### 问题 2：页面空白

**解决方案**：
1. 检查浏览器控制台是否有错误（F12）
2. 确认所有组件文件都已创建
3. 重启开发服务器（Ctrl+C 停止，然后 `npm run dev`）

### 问题 3：样式不显示

**解决方案**：
1. 确认 `app/globals.css` 在 `app/layout.tsx` 中被引入
2. 检查 `tailwind.config.ts` 配置是否正确
3. 重启开发服务器

### 问题 4：动画卡顿

**解决方案**：
1. 这在开发模式下是正常的
2. 构建生产版本测试：`npm run build && npm start`
3. 生产环境性能会明显更好

## 📚 下一步

- 📖 阅读完整文档：[README.md](./README.md)
- 🚀 学习部署流程：[DEPLOYMENT.md](./DEPLOYMENT.md)
- 🎨 探索更多自定义选项
- 📊 添加 Google Analytics 或其他分析工具
- 🔍 优化 SEO 设置

## 🎉 完成！

恭喜！您已经完成了基础配置。现在可以：

1. ✏️ 继续完善您的个人信息
2. 📸 添加真实的项目截图
3. 🔗 更新所有链接为真实地址
4. 🚀 部署到线上
5. 📢 分享给朋友和潜在雇主

---

**祝您使用愉快！如有问题，欢迎查看文档或搜索解决方案。💪**
