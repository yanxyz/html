# \<table>


示例：

```html
<table>
  <caption></caption>
  <colgroup>
    <col />
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th></th>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
      <td></td>
    </tr>
  </tfoot>
</table>
```

注意包含关系与先后顺序。一个 `<table>` 只能有一个 `<caption>`, `<thead>`, `<tfoot>`，可以有多个 `<tbody>`。

简单的例子：

```html
<table>
  <tr>
    <td>r1c1</td>
    <td>r1c2</td>
  </tr>
  <tr>
    <td>r2c1</td>
    <td>r2c2</td>
  </tr>
</table>
```


## 样式

table 是两维结构：行与列。但是 HTML 中以 row 为主。

```
table:
table wrapper box -- block formatting context
caption box
table box -- table formatting context
```

内部元素 margin 无效。

6 个图层
