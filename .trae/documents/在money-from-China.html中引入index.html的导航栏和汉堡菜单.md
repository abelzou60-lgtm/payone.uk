## 实现步骤

### 1. 分析文件结构
- **index.html**：包含完整的导航栏结构，包括桌面端菜单、移动端汉堡菜单和相关样式与脚本
- **money-from-China.html**：目前只有简单的Home按钮，需要替换为完整的导航栏

### 2. 提取导航栏相关代码
从index.html中提取以下内容：
- 导航栏HTML结构（`<nav class="navbar">`部分）
- 导航栏相关的CSS样式（从`.navbar`开始的所有样式）
- 汉堡菜单控制的JavaScript函数（`toggleMobileMenu()`函数）

### 3. 修改money-from-China.html
1. **移除现有Home按钮**：删除`<a href="index.html" class="home-btn">Home</a>`
2. **添加导航栏HTML**：在`<body>`标签开始处添加从index.html提取的导航栏结构
3. **添加导航栏CSS**：在`<style>`标签中添加从index.html提取的导航栏相关样式
4. **添加JavaScript函数**：在`<script>`标签中添加`toggleMobileMenu()`函数
5. **调整内容容器间距**：修改`.content-container`的`padding-top`，确保内容不被导航栏遮挡

### 4. 验证一致性
- 确保导航栏样式与index.html完全一致
- 确保汉堡菜单在移动端正常工作
- 确保所有链接和功能正常
- 确保页面布局美观，内容不被导航栏遮挡