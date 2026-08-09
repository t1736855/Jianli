# 任务计划 (Task Plan) - 个人简历网站 AI 美化与高级重构

## 任务目标
根据 `taste-skill`（`design-taste-frontend` / `gpt-taste` / `high-end-visual-design`）规则，对 `E:\前端练习\网页练习\个人简历网站` 进行深度视觉与交互美化：
- **不修改任何内容文本**，保持数据原样。
- **去除 AI 常用审美**：去除过度的蓝紫渐变高光、粗糙的彩色球体背景粒子（Blob/Floating icons）、无序圆角卡片。
- **提升高级感与设计品味**：采用 Linear / Vercel / Apple 风格的精炼极简黑白灰基底，配以精致的微光边框 (Subtle Borders / Glow)、极致排版层级、玻璃拟态 Navbar、磁性微交互、平滑GSAP/Framer Motion 滚动动画。

---

## 阶段规划

### Phase 1: 审美调性重塑与全局样式改造 (Global CSS & Tailwind Design Tokens)
- [x] 分析与审计现有代码 (Audit AI Slop Elements)
- [x] 改造 `globals.css` 和 `tailwind.config.ts`：设定超高级色彩系统、噪点纹理 (Noise Texture)、暗黑/高对比主题、精细边框和字体层级。

### Phase 2: HeroSection 重构 (祛 AI Slop，极致排版与微动效)
- [x] 移除浮夸粗糙的 2D Canvas 粒子连线与浮动图标杂项。
- [x] 替换为 Linear 风格的精致网格渐变 (Grid Background) + Subtle Light Flare (微光弥散)。
- [x] 重构 H1/副标题层级、高级打字机/科技闪烁 Badge 与精致按钮磁性悬浮态。

### Phase 3: 各核心 Component 美化与排版升级
- [x] `Navbar.tsx`：升级为极致悬浮玻璃条 (Floating Pill Glassmorphism Bar) + 精美滚动指示。
- [x] `AboutSection.tsx`：极简优雅 Bento Grid 构图，卡片 hover 微光与细腻排版。
- [x] `EducationSection.tsx` & `SkillsSection.tsx`：清爽优雅的科技图表/技能百分比条与证书 Hover 卡片。
- [x] `ProjectsSection.tsx` & `ContactSection.tsx`：高级卡片展开动画、GitHub/案例展示卡片视觉锤。
- [x] `PageLoader.tsx`：匹配极简暗黑工程美学。

### Phase 4: 编译验证与本地服务启动
- [x] 运行构建/启动开发服务器 (`npm run dev`) 确认网页零报错并渲染完成。
- [x] 汇报修改成果。
