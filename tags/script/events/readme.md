# script events

events

- load
- error

IE<9 不支持 load 事件, 使用 readystatechange 事件。

IE9-10 同时支持 readystatechange，注意不要同时注册这两种事件。

## 参考

- https://msdn.microsoft.com/en-us/library/hh180173.aspx
- http://stackoverflow.com/questions/4845762/onload-handler-for-script-tag-in-internet-explorer
