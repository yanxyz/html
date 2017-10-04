# spellcheck attribute

控件

- input
- textarea

value:

- true 启用
- default
- false 关闭

Chrome 默认启用，当 input focus 时检查，在拼写错误的单词下方标记红色的波浪线。

Edge 看不出有什么效果。

拼写检查所用字典由 lang attribute 决定。从自身开始沿着父链向上查找 lang attribute 一直到 `<html>`，如果没有找到则不启用 spellcheck。

## 参考

- https://developer.mozilla.org/en-US/docs/Web/HTML/Controlling_spell_checking_in_HTML_forms
