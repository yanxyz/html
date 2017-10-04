# iframe name

iframe name attribute

- 用作 a, form 的 target attribute。常见于以 frameset 构建的页面。
- 用作 input, button 的 formtarget attribute

document.frames[name] 得到 iframe 的 window 对象。

IE<8，iframe name 是只读的。

```js
var iframe = document.createElement('iframe')
iframe.name = 'test'
document.body.appendChild(iframe)
alert(document.frames.test) // IE<8 undefined
```

用 IE 的一个 hack 解决：

```js
var iframe = document.createElement('<iframe name="test">') // IE8 也支持
document.body.appendChild(iframe)
alert(document.frames.test) // IE<8 "[object]"
```
