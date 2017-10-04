Firefox button focus 之后有一个虚线框，重置：

```css
/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
```

## 参考

- https://developer.mozilla.org/en/docs/Web/HTML/Element/button#Notes
- https://github.com/necolas/normalize.css/blob/master/normalize.css#L311-L315
