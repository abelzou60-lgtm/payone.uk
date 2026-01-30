## 修复 payments.html 中的悬浮微信客服功能

### 问题分析
- payments.html 文件中虽然有微信客服的 CSS 样式定义，但缺少完整的 HTML 结构和 JavaScript 功能实现
- collect.html 文件中有完整的微信客服功能实现，包括悬浮图标、弹窗和相关 JavaScript 函数

### 修复方案

#### 步骤 1：添加 HTML 结构
在 payments.html 文件的 `</div>` 结束标签前（靠近文件末尾）添加以下 HTML 代码：

```html
<!-- 悬浮客服图标 -->
<div class="float-icons-container">
    <!-- 悬浮微信客服图标 -->
    <div class="wechat-float" onclick="toggleWechatModal()">
        <div class="wechat-icon"></div>
    </div>
    
    <!-- 悬浮WhatsApp客服图标 -->
    <a href="https://wa.me/message/QXYAFEGTDWIBE1" target="_blank" rel="noopener noreferrer" class="whatsapp-float">
        <i class="fab fa-whatsapp whatsapp-icon"></i>
    </a>
</div>

<!-- 微信弹出窗 -->
<div id="wechatModal" class="wechat-modal" onclick="closeWechatModal(event)">
    <div class="wechat-popup" onclick="event.stopPropagation()">
        <h3>微信客服</h3>
        <img src="https://cf.aibochinese.com/%E7%88%B1%E5%8D%9A%C2%B7%E5%AE%A2%E5%9B%BE%E7%89%87%E5%BA%93/AIBOBLOG%20WECHAT.png" alt="微信二维码" class="wechat-qr">
        <button class="close-btn" onclick="closeWechatModal()">关闭</button>
    </div>
</div>
```

#### 步骤 2：添加 JavaScript 代码
在 payments.html 文件的 `<script>` 标签内，在现有代码后添加以下 JavaScript 代码：

```javascript
// 微信弹窗控制函数
function toggleWechatModal() {
    const modal = document.getElementById('wechatModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function closeWechatModal(event) {
    document.getElementById('wechatModal').style.display = 'none';
}

// 点击模态背景关闭
window.onclick = function(event) {
    const wechatModal = document.getElementById('wechatModal');
    
    if (event.target === wechatModal) {
        closeWechatModal();
    }
};
```

### 预期结果
- payments.html 文件将具有与 collect.html 相同的悬浮微信客服功能
- 用户可以点击微信图标打开客服二维码弹窗
- 用户可以点击关闭按钮或弹窗背景关闭弹窗
- WhatsApp 图标将链接到正确的客服账号

### 技术细节
- 保持与 collect.html 完全一致的代码结构和功能
- 确保 CSS 样式、HTML 结构和 JavaScript 代码的完整性
- 验证所有链接和图片路径的正确性