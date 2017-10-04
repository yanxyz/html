# iframe



## Chrome

Chrome 本地文件窗口之间访问视为跨域。

top window 访问 iframe window:

```
var win = window.frames[0]
console.log(win.location)
{href: "about:blank", origin: "null"}
console.log(win.document.body)
null
```

iframe 访问 top window, 将打印一条错误消息：
Uncaught DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame.
