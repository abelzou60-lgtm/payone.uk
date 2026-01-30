# 将index.html的导航栏和汉堡菜单迁移到custom-page.html

## 分析现状
- **index.html**：包含完整的导航栏结构，包括桌面菜单、移动端汉堡菜单和相关CSS/JS
- **custom-page.html**：仅有一个简单的"首页"按钮，缺少完整导航功能

## 实施计划

### 1. 复制导航栏HTML结构
- 从index.html复制`<nav class="navbar">`完整结构（包含logo、桌面菜单、汉堡按钮和移动端菜单）
- 替换custom-page.html中现有的`<a href="index.html" class="home-button">首页</a>`
- 将导航栏放置在`<body>`标签顶部，`<div class="container">`之前

### 2. 迁移导航栏CSS样式
- 从index.html复制导航栏相关CSS（从`/* 导航栏样式 */`开始的完整块）
- 粘贴到custom-page.html的`<style>`部分末尾
- 确保包含所有响应式设计样式（桌面和移动端）

### 3. 添加必要的JavaScript功能
- 从index.html复制`toggleMobileMenu()`函数到custom-page.html的`<script>`部分
- 确保函数正确控制汉堡菜单的显示/隐藏

### 4. 调整布局间距
- 修改custom-page.html中`.container`类的样式，添加`margin-top: 80px`
- 在移动端媒体查询中调整为`margin-top: 70px`，避免与固定导航栏重叠

### 5. 验证功能
- 确保导航栏在桌面端和移动端都能正常显示
- 验证汉堡菜单点击功能
- 确认所有导航链接指向正确地址
- 检查页面布局是否合理，无元素重叠

## 预期效果
custom-page.html将拥有与index.html完全一致的导航栏和汉堡菜单，包括视觉样式和交互功能，同时保持页面其他内容不变。