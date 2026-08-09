# 设计解读与全新风格规划 (New Theme: Apple / Warm Editorial Minimalist)

## 0. BRIEF INFERENCE (全新风格定位)
- **背景**: 用户反馈刚才的极暗纯黑工程师风格（Dark Technical/Linear Mode）配色太沉闷难看。
- **全新设计方向**: **Apple 官方 / 暖亮高端编辑杂志风格 (Apple / Premium Light Editorial)**
- **调性特点**:
  1. **色彩系统**: 温暖干净的高级米白/奶油白基底 (`#FAF9F6` / `#F5F4F0`) + 极其舒适深沉的墨黑/暖炭黑字体 (`#1C1C1E`) + 宝蓝/暖金/翡翠绿优雅点缀色 (`#2563EB` / `#D97706` / `#059669`)。
  2. **质感边框与阴影**: 柔柔的苹果式弥散阴影 (`box-shadow: 0 10px 30px rgba(0,0,0,0.04)`), 精致的微暖白底卡片 (`#FFFFFF`), 超低对比度灰线 border (`rgba(0,0,0,0.06)`).
  3. **排版体验**: 大字号大呼吸感的无衬线/大写字号对比，高质感文字包容感 (Typography-driven)，干净、明亮、极其清爽高级，完全摆脱死板黑底。
  4. **微动效**: 苹果式弹簧卡片Hover (Spring Scale & Lift)、半透明高斯模糊毛玻璃 Navbar。

---

## 阶段执行规划
1. **重构 `globals.css`**：定义 Apple 暖白高级主题色、圆角、阴影、层级。
2. **美化 `Navbar.tsx`**：使用轻盈通透的纯白/半透明高斯模糊毛玻璃，搭配精致小桥段导航。
3. **美化 `HeroSection.tsx`**：大呼吸感标题、亮色柔和弥散光（Warm ambient aura）、细腻打字机、高质感按钮。
4. **美化 `AboutSection.tsx` / `EducationSection.tsx` / `SkillsSection.tsx` / `ProjectsSection.tsx` / `ContactSection.tsx` / `PageLoader.tsx`**：全面同步为极具呼吸感、精美绝伦的 Apple 亮色编辑风。
5. **验证构建**：测试服务运行情况。
