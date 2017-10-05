# \<textarea>

## style

Chrome, Firefox 等默认有缩放器。

IE 默认有竖直滚动条，`overflow: auto` 重置。

```css
textarea {
  overflow: auto;
  resize: none;
}
```

## script

textarea 没有 value attribute。textarea.value 为 textarea.textContent。
在 HTML 中 textarea 子节点需要转义。

defaultValue 初始文本值（textContent)。
