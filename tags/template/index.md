# \<template>

- [spec](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
- [HTML's New Template Tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/)

用 template.cloneNode(true) 或 document.importNode() 复制模板，
两者的区别是，前者在用 target.appendChild() 插入时更新文档，
后者是 document.importNode() 更新文档。
