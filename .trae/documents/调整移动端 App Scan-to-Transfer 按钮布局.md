## 实现计划

### 目标
修改 `pay-buttons-container` 布局，使移动端显示为 2 行 2 列的按钮排列。

### 具体修改

1. **在现有媒体查询中添加按钮布局调整**
   - 找到现有的 `@media (max-width: 768px)` 媒体查询（约第 323 行）
   - 在其中添加针对 `.pay-buttons-container` 的样式修改
   - 将 `flex-direction` 设置为 `row`，保持水平排列
   - 添加 `flex-wrap: wrap` 允许按钮换行
   - 将每个按钮的 `flex` 值调整为 `0 0 calc(50% - 7.5px)`，确保每行显示 2 个按钮并考虑间距

### 技术实现细节

- **当前布局**：`display: flex; gap: 15px;` - 单行显示所有 4 个按钮
- **修改后移动端布局**：
  ```css
  .pay-buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .pay-buttons-container button {
    flex: 0 0 calc(50% - 7.5px);
  }
  ```

### 预期效果
- **桌面端**：保持现有单行 4 按钮布局
- **移动端**：改为 2 行 2 列布局，每行显示 2 个按钮，共 2 行

### 验证步骤
- 检查修改后的代码在桌面端是否保持原有布局
- 检查修改后的代码在移动端是否正确显示为 2 行 2 列布局