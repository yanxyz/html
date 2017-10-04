# input:file

## Attribute

可以指定 accept, multiple, required。

注意 value attribute 被忽略。

### accept

accept 指定文件类型，值为：

- "audio/*"
- "video/*"
- "image/*"
- MIME type
- file extension

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept

### mutiple

multiple 指定多个文件。

-
- http://caniuse.com/#feat=input-file-multiple

## style

不能改变样式。

## script


### type

不能将其它 type 改为 file。

### value

value

Chrome 给的是假路径，比如 `C:\fakepath\test.txt`

### files



