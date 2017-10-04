# select-one

size 默认为 0。

select 本身没有 value attribute, select.value 为 selectedOption.value

如果 option 没有 value attribute，option.value 为 option.text。
option.text 会 trim(), 这是它跟 option.textContent 的区别。


## Events

脚本改变 select 的值不会触发 change 事件。
