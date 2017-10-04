
- http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

async 下载不阻塞 HTML parsing，下载完成后即运行，运行时阻塞 HTML parsing。执行顺序不确定，谁先下载完成谁先运行。

defer 下载不阻塞 HTML parsing，等到 HTML parsing 完成后，在 DOMContentLoaded 之前（如果还没下载完成会延迟 DOMContentLoaded ）依序调用。

如果 script 运行顺序重要，IE < 10 不要使用 defer

- https://github.com/h5bp/lazyweb-requests/issues/42
