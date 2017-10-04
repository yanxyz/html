# 空链接

当点击链接时，先响应 click 事件，然后是 href。如果click事件处理程序返回false将阻断对href的处理。

IE6 覆盖了 click 事件。


<http://jacki6.iteye.com/blog/477958>
<http://www.cnblogs.com/litao229/archive/2009/06/23/1509379.html>
<http://hoogle.blog.51cto.com/1793311/739022>

[测试](http://jacki6.iteye.com/blog/477958)



href 使用 javascript 后，如果是空值，则

如果click事件处理程序里面对location.href赋值，则