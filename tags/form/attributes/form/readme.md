# form attribute

不在表单内部的控件可以用 form attribute 指定所属 from:

```html
<input type="text" form="formId" />
```

form attribute 的值是 form id 不是 form name。

一个控件只能属于一个 form。

IE, Edge 不支持。
