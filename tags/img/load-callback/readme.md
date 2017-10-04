IE8 下 image.onload 不调用

``` js
var img = new Image()
img.src = '200.jpg'
// 此时触发了 load 事件，下行代码绑定 load 事件已晚。
img.onload = function () {
  alert(1)
}
```

## 参考

- http://stackoverflow.com/questions/14429656/onload-callback-on-image-not-called-in-ie8
