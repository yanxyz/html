# download attr

指令浏览器下载链接而不是打开链接。

如果 download attr 的值包含路径，浏览器不会创建路径

- Chrome 将路径添加到下载文件名字中。
- Edge 忽略它的值

download attr 受同域限制

- Chrome 仍然下载，不过忽略它的值
- Firefox 忽略它

### Content-Disposition response header

```
Content-Disposition: attachment; filename="filename.jpg"
```

优先于 download attr。

```
Content-Disposition: inline
```

- Chrome 应用 download attr；
- Firefox 忽略 download attr；
