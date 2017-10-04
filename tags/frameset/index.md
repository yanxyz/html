# \<frameset>


初步了解 [example-01](example-01/index.html)

使用 frameset doctype，不管用什么 doctype 浏览器都没抱怨。
IE>9，认为 frameset doctype 是无效的 HTML5 doctype。

frameset 取代常规页面 body 的位置。`document.body` 返回的是 frameset。

boby 只能放到 noframes 下，noframes 的作用类似于 noscript，
当用户代理不支持 frameset 时显示它的内容，即一个常规页面。

每个 frame 对应一个窗口，可以在指定 frame 中打开页面：

```html
<a href="http://yanxyz.net" target="frame-name">open</a>
```
