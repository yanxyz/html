# button type attr

value:

- submit 默认值，点击提交表单
- reset
- button

IE<8 type 默认值是 button。

IE<8 不管 type 是什么值，不管是否指定了 value，button.value 为 button.innerHTML，提交的数据也是 button.innerHTML。
