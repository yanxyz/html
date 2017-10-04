# disabled attribute

控件

- input
- textarea
- select
- fieldset

## fieldset

当用到 fieldset 上时，它内部的控件也是 disabled，但是控件 prop disabled 没有继承。这意味着在表单序列化时要特别考虑这种情况。
