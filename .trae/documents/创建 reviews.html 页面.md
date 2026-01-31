# 创建 reviews.html 页面

## 步骤 1：复制基础结构和样式
- 从 index.html 复制完整的 `<head>` 部分，修改页面标题为 "案例和客服评价"
- 复制 `<nav class="navbar">` 导航栏部分，包含汉堡菜单功能
- 复制 `<div class="float-icons-container">` 悬浮客服图标组
- 复制 `<div id="wechatModal">` 微信弹出窗
- 复制 `<script>` 部分，包含所有交互功能

## 步骤 2：创建页面主体内容
- 添加页面标题 "案例和客服评价"
- 创建卡片容器，使用 flex 布局实现居中对齐
- 设计四个方形卡片，每个卡片使用不同的渐变色背景
- 为每个卡片添加文字和超链接：
  1. 综合评价 (#)
  2. 账户激活 (https://blog.aibochinese.com/post/wise-deposit-case)
  3. 证明材料通过 (https://cf.aibochinese.com/%E5%9B%BD%E9%99%85%E8%99%9A%E6%8B%9F%E4%BF%A1%E7%94%A8%E5%8D%A1/case-krak-proof.jpg)
  4. 聚合收款页 (https://payone.uk/payments)

## 步骤 3：添加卡片样式
- 为卡片容器添加响应式布局
- 为四个卡片定义不同的渐变色背景
- 添加卡片悬停效果和过渡动画
- 确保卡片在不同设备上都能正确显示