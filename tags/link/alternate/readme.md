#

只有 title 的是 preferred stylesheets。多个 preferred stylesheets，只应用一个。应用哪一个由 UA 决定。
通常是第一个。UA 也可能提供选择功能：

- IE 菜单“查看” -> “样式”，可以切换 preferred stylesheets。
- Chrome 需要扩展

有 rel="alternate stylesheet" 的是 alternative stylesheets，默认禁用。如果没有 title，浏览器没有选择菜单。

- http://localhost:9003/en-US/docs/Web/CSS/Alternative_style_sheets
