导航到指定的文档片段，比如：

```html
<a href="#test">click me</a>
```

点击上面链接：

1. 查找第一个 id="test"，找到了即停止，没有找到则进行下一步。
2. 查找第一个 <a name="test">，找到了即停止，没有找到就失败了。

片段名不区分大小写。


## 参考

- https://html.spec.whatwg.org/multipage/browsers.html#scroll-to-fragid
