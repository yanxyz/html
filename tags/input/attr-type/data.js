var DATA = {
  'button': {
    title: '按钮',
    attrs: [],
    props: ['value'],
    events: [],
    example: '<input type="button"> <input type="button" value="button">'
  },
  'checkbox': {
    title: '复选框',
    attrs: ['checked', 'required'],
    props: ['checked', 'value'],
    events: ['input', 'change'],
    example: '<input type="checkbox" name="favorite" id="" value="0"> Book <input type="checkbox" name="favorite" id="" value="1"> Music'
  },
  'color': {
    title: '色盘',
    attrs: ['autocomplete', 'list'],
    props: ['value', 'list', 'select'],
    events: ['input', 'change'],
    ie: -1
  },
  'date': {
    title: '日历 - 日',
    attrs: ['autocomplete', 'list',
      'max', 'min', 'readonly', 'required', 'step'],
    props: ['value', 'valueAsDate', 'valueAsNumber',
      'list', 'select()', 'stepDown()', 'stepUp()'
    ],
    events: ['input', 'change'],
    ie: -1
  },
  'datetime-local': {
    title: '日期 - 本地',
    seealso: 'date',
    ie: -1
  },
  'email': {
    title: '邮箱输入框',
    attrs: [
      'autocomplete',
      'list', 'maxlength', 'minlength', 'multiple',
      'pattern', 'placeholder', 'readonly', 'required', 'size'
    ],
    props: ['value', 'list', 'select()'],
    events: ['input', 'change'],
    ie: 10
  },
  'file': {
    title: '文件选择框',
    attrs: ['accept', 'multiple', 'required'],
    props: ['files', 'value', 'select()'],
    events: ['input', 'change'],
  },
  'hidden': {
    title: '隐藏字段',
    attrs: ['autocomplete'],
    props: ['value'],
    events: []
  },
  'image': {
    title: '图片按钮',
    attrs: [
      'alt',
      'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget',
      'height', 'src', 'width'
    ],
    props: ['value'],
    events: [],
    example: '<input type="image"> <input type="image" src="btn.png" alt="image button">'
  },
  'month': {
    title: '日历 - 月',
    'seealso': 'date',
    ie: -1
  },
  'number': {
    title: '数字输入框',
    attrs: [
      'autocomplete',
      'inputmode', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'readonly', 'required', 'size'
    ],
    props: [
      'value', 'select()',
      'selectionStart', 'selectionEnd', 'selectionDirection',
      'setRangeText()', 'setSelectionRange()',
      'stepDown()', 'stepUp()'
    ],
    events: ['input', 'change'],
    example: '<input type="number" min="0" max="100" step="10">',
    ie: -1
  },
  'password': {
    title: '密码输入框',
    attrs: [
      'autocomplete',
      'inputmode', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'readonly', 'required', 'size'
    ],
    props: [
      'value', 'select()',
      'selectionStart', 'selectionEnd', 'selectionDirection',
      'setRangeText()', 'setSelectionRange()'
    ],
    events: ['input', 'change'],
    example: '<input type="password" name="password" id="" value="123456">'
  },
  'radio': {
    title: '单选框',
    seealso: 'checkbox',
    example: '<input type="radio" name="gender" id="male" value="male"> Male <input type="radio" name="gender" id="female" value="female"> Female'
  },
  'range': {
    title: '值域',
    attrs: ['autocomplete', 'list', 'max', 'min', 'step'],
    props: ['value', 'valueAsNumber', 'list', 'stepDown()', 'stepUp()'],
    events: ['input', 'change'],
    ie: 10
  },
  'reset': {
    title: '重置表单按钮',
    seealso: 'button'
  },
  'search': {
    title: '搜索框',
    seealso: 'text',
    ie: 10
  },
  'submit': {
    title: '提交按钮',
    attrs: [
      'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget',
    ],
    props: ['value'],
    events: [],
  },
  'tel': {
    title: '电话输入框',
    seealso: 'url',
    ie: 10
  },
  'text': {
    title: '文本输入框',
    attrs: [
      'autocomplete', 'dirname',
      'inputmode', 'list', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'readonly', 'required', 'size'
    ],
    props: [
      'value', 'list', 'select()',
      'selectionStart', 'selectionEnd', 'selectionDirection',
      'setRangeText()', 'setSelectionRange()'
    ],
    events: ['input', 'change']
  },
  'time': {
    title: '日历 - 时间',
    seealso: 'date',
    ie: -1
  },
  'url': {
    title: '网址输入框',
    attrs: [
      'autocomplete',
      'list', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'readonly', 'required', 'size'
    ],
    props: [
      'value', 'list', 'select()',
      'selectionStart', 'selectionEnd', 'selectionDirection',
      'setRangeText()', 'setSelectionRange()'
    ],
    events: ['input', 'change'],
    ie: 10
  },
  'week': {
    title: '日历 - 周',
    seealso: 'date',
    ie: -1
  }
}

function each(list, callback) {
  if (length in list) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i)
    }
  } else {
    for (var key in list) {
      if (list.hasOwnProperty(key)) {
        callback(list[key], key)
      }
    }
  }
}
