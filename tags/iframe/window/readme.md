# iframe window

iframe 是一个 window。

注意：窗口之间访问受同域的限制。

## iframe 访问其它窗口

- window.top 最顶层窗口，即浏览器标签页窗口
- window.parent 父窗口
- window.self 自身窗口
- window.opener 打开此窗口的窗口

- window.window 自身窗口
- window.name
- window.frameElement 嵌入窗口的元素，object iframe embed 都可以嵌入窗口。

## 其它窗口访问 iframe

### window.frames

<https://developer.mozilla.org/en-US/docs/Web/API/Window/frames>

window.frames 返回当前窗口的直接子窗口列表

```js
frameList = window.frames
frameList === window  // true, IE<9 false
frameList.length === window.length  // true
```

- window.frames[index] 返回 iframe window
- window.frames[name] 返回 iframe window
- window.frames[id] 返回 iframe 元素

IE, window.frames[id] 返回 iframe window

### iframe element API

- iframe.contentWindow 返回 iframe window
- iframe.contentDocument 返回 iframe document

IE<8 不支持 iframe.contentDocument，可以用 iframe.contentWindow.document

