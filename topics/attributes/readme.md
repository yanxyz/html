# HTML Attributes

## Boolean attributes

<https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attribute>

布尔特性，它的值由它是否存在决定，存在则是 true, 不存在则是 false。

checked 为 false:

```html
<input type="checkbox" />
```

checked 为 true:

```html
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />
```

当存在时 attribute 值可以是空字符串或者 attribute name，不可以用 "true" 或 "false"。
不过浏览器没有严格遵守，只要 attribute 存在，不管它的值是什么，对应属性都是true。

checked 为 true:

```html
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
```
