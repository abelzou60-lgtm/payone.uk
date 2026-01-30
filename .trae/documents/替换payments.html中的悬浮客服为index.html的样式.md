## 任务计划：替换payments.html中的悬浮客服为index.html的样式

### 步骤1：删除现有悬浮客服代码
- 删除payments.html中`.floating-contact`相关的CSS样式（约358-410行）
- 查找并删除payments.html中现有的悬浮客服HTML代码

### 步骤2：添加index.html的悬浮客服样式
- 在payments.html的`<style>`标签中添加index.html的悬浮客服CSS样式，包括：
  - `.wechat-float` 和 `.whatsapp-float` 样式
  - `.float-icons-container` 样式
  - `.wechat-modal` 和相关弹窗样式
  - `.wechat-icon` 和 `.whatsapp-icon` 样式

### 步骤3：添加悬浮客服HTML结构
- 在payments.html的`</body>`标签前添加index.html的悬浮客服HTML结构：
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

### 步骤4：添加JavaScript函数
- 在payments.html的`<script>`标签中添加index.html的微信弹窗控制函数：
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

### 步骤5：验证修改
- 确保修改后的悬浮客服样式和功能与index.html完全一致
- 验证Font Awesome图标正常显示
- 验证微信弹窗功能正常工作
- 验证响应式设计在移动端正常显示