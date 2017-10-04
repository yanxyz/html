---
permalink: /iframe/
---

# \<iframe>


iframe 也是窗口。窗口之间访问受同域策略限制。

Chrome 本地文件窗口之间访问视为跨域，将打印一条错误消息：
Uncaught DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame.

