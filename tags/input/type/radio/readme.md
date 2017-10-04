# radio

单个 radio button 单击之后不能取消选择，所以都是一组 radio button，每个 input name 一样。遍历这些 input 来获取选中的值。

当没有指定 value attribute 时，默认值是 `value="on"`。

获取选中的值：

```js
document.querySelector('input[name="gender"]:checked').value
$('input[name="gender"]:checked').val()
```

更改选中项：

```js
document.querySelectorAll('input[name="gender"]')[1].checked = true
$('input[name="gender"]').eq(1).prop('checked', true)
```
