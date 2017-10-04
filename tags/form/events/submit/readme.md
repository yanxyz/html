# submit

不管是否有 submit button, 在 input:text 内回车可以提交表单。
在 textarea 内回车是换行。

submit button，点击它可以提交表单，触发 form submit 事件。

```html
<input type="submit" />
<input type="image" src="submit.png" alt="Submit" />
<!-- button type 默认是 submit, IE < 8 默认是 button  -->
<button type="submit">Submit</button>
<button>Submit</button>
```

form.submit() 不会触发 form submit 事件。
