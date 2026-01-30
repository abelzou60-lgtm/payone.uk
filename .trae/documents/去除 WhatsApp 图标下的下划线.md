## 问题分析

在 `colloct.html` 文件中，WhatsApp 图标下出现下划线的原因是：

- WhatsApp 图标使用了 `<a>` 标签（链接标签），而 `<a>` 标签默认会显示下划线
- 微信图标使用的是 `<div>` 标签，所以没有下划线
- `.whatsapp-float` 类样式中缺少 `text-decoration: none;` 属性来去除链接下划线

## 解决方案

需要在 `.whatsapp-float` 类的 CSS 样式中添加 `text-decoration: none;` 属性，以去除链接的默认下划线。

## 修改步骤

1. 找到 `.whatsapp-float` 类的 CSS 定义（大约在第 309-324 行）
2. 在该类的样式中添加 `text-decoration: none;` 属性
3. 保存文件并验证修改效果

这样修改后，WhatsApp 图标就不会再显示下划线，与微信图标的样式保持一致。