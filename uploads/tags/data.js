/**
 * keys 来自
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
var DATA = {
  'Main root': [
    {
      name: 'html',
      desc: '文档根元素，其它元素都是它的后代。',
      spec: 'semantics.html#the-html-element'
    }
  ],
  'Document metadata': [
    {
      name: 'head',
      desc: '文档元信息容器。',
      spec: 'semantics.html#the-head-element'
    },
    {
      name: 'title',
      desc: '文档标题。',
      spec: 'semantics.html#the-title-element'
    },
    {
      name: 'base',
      desc: '指定相对路径的基路径。一个文档只能有一个。',
      spec: 'semantics.html#the-base-element'
    },
    {
      name: 'link',
      desc: '指定外部资源与文档的关系。通常是引入 CSS 文件。',
      spec: 'semantics.html#the-link-element'
    },
    {
      name: 'meta',
      desc: '文档除 <title>, <link> 等之外其它的元信息。',
      spec: 'semantics.html#the-meta-element'
    },
    {
      name: 'style',
      desc: '嵌入样式。',
      spec: 'semantics.html#the-style-element'
    }
  ],
  'Sections': [
    {
      name: 'body',
      desc: '文档内容容器。一个文档只能有一个。',
      spec: 'semantics.html#the-body-element'
    },
    {
      name: 'article',
      desc: '文档独立部分。通常包含标题。',
      spec: 'semantics.html#the-article-element'
    },
    {
      name: 'section',
      desc: '文档小节。通常包含标题。',
      spec: 'semantics.html#the-section-element'
    },
    {
      name: 'nav',
      desc: '文档导航（Navigation）。',
      spec: 'semantics.html#the-nav-element'
    },
    {
      name: 'aside',
      desc: '比如边栏。',
      spec: 'semantics.html#the-aside-element'
    },
    {
      name: 'h1',
      desc: '标题（Headings），共六级: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>。',
      spec: 'semantics.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements'
    },
    {
      name: 'hgroup',
      desc: '标题组（Headings Group）。',
      spec: 'semantics.html#the-hgroup-element'
    },
    {
      name: 'header',
      desc: '头部。',
      spec: 'semantics.html#the-header-element'
    },
    {
      name: 'footer',
      desc: '底部。',
      spec: 'semantics.html#the-footer-element'
    },
    {
      name: 'address',
      desc: '联系地址。',
      spec: 'semantics.html#the-address-element'
    }
  ],
  'Grouping content': [
    {
      name: 'p',
      desc: '段落（Paragraph）。',
      spec: 'semantics.html#the-p-element'
    },
    {
      name: 'hr',
      desc: '水平线（Horizontal Rule）。',
      spec: 'semantics.html#the-hr-element'
    },
    {
      name: 'pre',
      desc: '预格式化文本（Preformatted Text）。',
      spec: 'semantics.html#the-pre-element'
    },
    {
      name: 'blockquote',
      desc: '块级引用。',
      spec: 'semantics.html#the-blockquote-element'
    },
    {
      name: 'ol',
      desc: '有序列表（Ordered List），使用数字序号。',
      spec: 'semantics.html#the-ol-element'
    },
    {
      name: 'ul',
      desc: '无序列表（Unordered List）。',
      spec: 'semantics.html#the-ul-element'
    },
    {
      name: 'li',
      desc: '列表项（List Item），<ol>、<ul>、<menu> 的子元素。',
      spec: 'semantics.html#the-li-element',
    },
    {
      name: 'dl',
      desc: '定义列表（Definition List），定义一组术语。',
      spec: 'semantics.html#the-dl-element'
    },
    {
      name: 'dt',
      desc: '词目（Definition Term）。',
      spec: 'semantics.html#the-dt-element',
    },
    {
      name: 'dd',
      desc: 'desc，定义列表内的术语的定义。',
      spec: 'semantics.html#the-dd-element',
    },
    {
      name: 'figure',
      desc: '图表，独立单元，如图片，视频等。',
      spec: 'semantics.html#the-figure-element'
    },
    {
      name: 'figcaption',
      desc: 'Figure caption，图表标题，是 <figure> 的第一个或最后一个子元素。',
      spec: 'semantics.html#the-figcaption-element'
    },
    {
      name: 'main',
      desc: '放置文档主体的容器。',
      spec: 'semantics.html#the-main-element'
    },
    {
      name: 'div',
      desc: 'Document Division，通用容器。',
      spec: 'semantics.html#the-div-element'
    }
  ],
  'Text-level semantics': [
    {
      name: 'a',
      desc: 'Anchor，链接或锚点。',
      spec: 'semantics.html#the-a-element'
    },
    {
      name: 'em',
      desc: '强调（Emphasis）。嵌套次数代表强调程度。同一句子不同的强调位置句子的意思会不同。默认以斜体显示。',
      spec: 'semantics.html#the-em-element'
    },
    {
      name: 'strong',
      desc: '表示重要、严重、紧急。同一句子不同的位置使用 <strong> 不会改变句子的意思。默认以粗体显示。',
      spec: 'semantics.html#the-strong-element'
    },
    {
      name: 'small',
      desc: '字号小一级，如附注、版权。',
      spec: 'semantics.html#the-small-element'
    },
    {
      name: 's',
      desc: 'Strikethrough，删除线，表示意思不再准确或相关。在编辑内容，表示删除时 <del>。',
      spec: 'semantics.html#the-s-element'
    },
    {
      name: 'cite',
      desc: '作品来源，内容为作品的标题或地址。<blockquote> 与 <q> 有一个 cite attribute。',
      spec: 'semantics.html#the-cite-element'
    },
    {
      name: 'q',
      desc: 'Quote，行内引用。',
      spec: 'semantics.html#the-q-element'
    },
    {
      name: 'dfn',
      desc: '术语定义（Definition）。',
      spec: 'semantics.html#the-dfn-element'
    },
    {
      name: 'abbr',
      desc: '缩写（Abbreviation），用 title attribute 指定全写。',
      spec: 'semantics.html#the-abbr-element'
    },
    {
      name: 'ruby',
      desc: '旁注，用来标注东亚文字的音标。',
      spec: 'semantics.html#the-ruby-element'
    },
    {
      name: 'rt',
      desc: '<ruby> 的子元素，音标。',
      spec: 'semantics.html#the-rt-element'
    },
    {
      name: 'rp',
      desc: '包裹音标，比如括号。如果浏览器不支持 <ruby>，则显示它。',
      spec: 'semantics.html#the-rp-element'
    },
    {
      name: 'data',
      desc: '关联内容与机读数据。value attribute 指定机读数据。目前无浏览器支持。',
      spec: 'semantics.html#the-data-element'
    },
    {
      name: 'time',
      desc: '时间。datetime attribute 指定时间戳。',
      spec: 'semantics.html#the-time-element'
    },
    {
      name: 'code',
      desc: '代码。通常以等宽字体显示。',
      spec: 'semantics.html#the-code-element'
    },
    {
      name: 'var',
      desc: '数学表达式或代码中的变量（Variable）。',
      spec: 'semantics.html#the-var-element'
    },
    {
      name: 'samp',
      desc: '程序示例（Sample）。通常以等宽字体显示。',
      spec: 'semantics.html#the-samp-element'
    },
    {
      name: 'kbd',
      desc: 'Keyboard Input，需要用户输入（键盘、语音等）的内容，比如命令。默认以等宽字体显示。',
      spec: 'semantics.html#the-kbd-element'
    },
    {
      name: 'sub',
      desc: '下标（Subscript）。',
      spec: 'semantics.html#the-sub-and-sup-elements'
    },
    {
      name: 'sup',
      desc: '上标（Superscript）。',
      spec: 'semantics.html#the-sub-and-sup-elements'
    },
    {
      name: 'i',
      desc: '非一般文本，比如术语、西文船名、外语单词等。默认以斜体（Italic）显示。',
      spec: 'semantics.html#the-i-element'
    },
    {
      name: 'b',
      desc: '只为吸引注意，不强调文本。比如文档摘要中的关键词，段落首句。默认以粗体（bold）显示。',
      spec: 'semantics.html#the-b-element'
    },
    {
      name: 'u',
      desc: '用下划线（underline）标记，如中文名，拼写错误。',
      spec: 'semantics.html#the-u-element'
    },
    {
      name: 'mark',
      desc: '高亮文本。比如搜索结果，笔记等。',
      spec: 'semantics.html#the-mark-element'
    },
    {
      name: 'bdi',
      desc: 'Bi-Directional Isolation，',
      spec: 'semantics.html#the-bdi-element'
    },
    {
      name: 'bdo',
      desc: 'HTML Anchor Element，链接或锚点',
      spec: 'semantics.html#the-bdo-element'
    },
    {
      name: 'span',
      desc: '行内元素容器。',
      spec: 'semantics.html#the-span-element'
    },
    {
      name: 'br',
      desc: '换行（Line Break）。',
      spec: 'semantics.html#the-br-element'
    },
    {
      name: 'wbr',
      desc: '断行（Word Break Opportunity）。',
      spec: 'semantics.html#the-wbr-element'
    }
  ],
  'Embedded content': [
    {
      name: 'picture',
      desc: '图片。',
      spec: 'embedded-content.html#the-picture-element'
    },
    {
      name: 'img',
      desc: 'Image, 图片。',
      spec: 'embedded-content.html#the-img-element'
    },
    {
      name: 'iframe',
      desc: 'Inline frame。',
      spec: 'embedded-content.html#the-iframe-element'
    },
    {
      name: 'embed',
      desc: '嵌入资源。',
      spec: 'embedded-content.html#the-embed-element'
    },
    {
      name: 'object',
      desc: '外部资源。',
      spec: 'embedded-content.html#the-object-element'
    },
    {
      name: 'param',
      desc: 'Parameter，<object> 的参数。',
      spec: 'embedded-content.html#the-param-element'
    },
    {
      name: 'video',
      desc: '视频。',
      spec: 'embedded-content.html#the-video-element'
    },
    {
      name: 'audio',
      desc: '音频。',
      spec: 'embedded-content.html#the-audio-element'
    },
    {
      name: 'source',
      desc: '指定 <picture>、<audio>、<video> 的源文件。',
      spec: 'embedded-content.html#the-source-element'
    },
    {
      name: 'track',
      desc: '滑轨，用于 <audio>、<video>。',
      spec: 'embedded-content.html#the-track-element'
    },
    {
      name: 'map',
      desc: '图像映射。',
      spec: 'embedded-content.html#the-map-element'
    },
    {
      name: 'area',
      desc: '用于 <map> 内，指定图片热点。',
      spec: 'embedded-content.html#the-area-element'
    }
  ],
  'Tabular data': [
    {
      name: 'table',
      desc: '表格。',
      spec: 'tables.html#the-table-element'
    },
    {
      name: 'caption',
      desc: '表格标题。一个表格只能有一个。',
      spec: 'tables.html#the-caption-element'
    },
    {
      name: 'colgroup',
      desc: '表格列组。',
      spec: 'tables.html#the-colgroup-element'
    },
    {
      name: 'col',
      desc: '表格列。',
      spec: 'tables.html#the-col-element'
    },
    {
      name: 'tbody',
      desc: '表格表体。',
      spec: 'tables.html#the-tbody-element'
    },
    {
      name: 'thead',
      desc: '表格表头。一个表格只能有一个。',
      spec: 'tables.html#the-thead-element'
    },
    {
      name: 'tfoot',
      desc: '表格表尾。一个表格只能有一个。',
      spec: 'tables.html#the-tfoot-element'
    },
    {
      name: 'tr',
      desc: '表格行。',
      spec: 'tables.html#the-tr-element'
    },
    {
      name: 'td',
      desc: '表格单元格。',
      spec: 'tables.html#the-td-element'
    },
    {
      name: 'th',
      desc: '表格标题单元格。默认为粗体。',
      spec: 'tables.html#the-th-element'
    }
  ],
  'Forms': [
    {
      name: 'form',
      desc: '表单。',
      spec: 'forms.html#the-form-element'
    },
    {
      name: 'label',
      desc: '标签。',
      spec: 'forms.html#the-label-element'
    },
    {
      name: 'input',
      desc: '根据 type attribute 不同，可以是输入框、单选按钮、复选框等。',
      spec: 'forms.html#the-input-element'
    },
    {
      name: 'button',
      desc: '按钮。',
      spec: 'forms.html#the-button-element'
    },
    {
      name: 'select',
      desc: '选择框。',
      spec: 'forms.html#the-select-element'
    },
    {
      name: 'datalist',
      desc: '选项列表，表示可以使用的值。IE10 支持。',
      spec: 'forms.html#the-datalist-element'
    },
    {
      name: 'optgroup',
      desc: '选项组。',
      spec: 'forms.html#the-optgroup-element'
    },
    {
      name: 'option',
      desc: '选项，用在 <select>、<datalist>、<optgroup> 内。',
      spec: 'forms.html#the-option-element'
    },
    {
      name: 'textarea',
      desc: '文本框，可以输入多行文本。',
      spec: 'forms.html#the-textarea-element'
    },
    {
      name: 'output',
      desc: '输出，如计算结果。',
      spec: 'forms.html#the-output-element'
    },
    {
      name: 'progress',
      desc: '进度条。',
      spec: 'forms.html#the-progress-element'
    },
    {
      name: 'meter',
      desc: '值域。',
      spec: 'forms.html#the-meter-element'
    },
    {
      name: 'fieldset',
      desc: '字段集。',
      spec: 'forms.html#the-fieldset-element'
    },
    {
      name: 'legend',
      desc: '<fieldset> 的标题。',
      spec: 'forms.html#the-legend-element'
    }
  ],
  'Interactive elements': [
    {
      name: 'details',
      desc: '详细。IE 与 Firefox 不支持。',
      spec: 'forms.html#the-details-element'
    },
    {
      name: 'summary',
      desc: '<details> 的摘要。',
      spec: 'forms.html#the-summary-element'
    },
    {
      name: 'menu',
      desc: '菜单。',
      spec: 'forms.html#the-menu-element'
    },
    {
      name: 'menuitem',
      desc: '菜单项。',
      spec: 'forms.html#the-menuitem-element'
    },
    {
      name: 'dialog',
      desc: '对话框。',
      spec: 'forms.html#the-dialog-element'
    }
  ],
  'Scripting': [
    {
      name: 'script',
      desc: '脚本。',
      spec: 'scripting.html#the-script-element'
    },
    {
      name: 'noscript',
      desc: '如果浏览器不能运行脚本，则显示它。',
      spec: 'scripting.html#the-noscript-element'
    },
    {
      name: 'template',
      desc: '模板。IE 不支持。',
      spec: 'scripting.html#the-template-element'
    },
    {
      name: 'canvas',
      desc: '画布。',
      spec: 'scripting.html#the-canvas-element'
    }
  ],
  'Obsolete and deprecated elements': [
    {
      name: 'keygen',
      desc: '密钥生成器。浏览器不再支持。'
    },
    {
      name: 'frameset',
      desc: '框架集。'
    },
    {
      name: 'frame',
      desc: '框架，用在 <frameset> 内。'
    },
    {
      name: 'noframes',
      desc: '用在 <frameset> 内，作用是如果浏览器不支持 <frameset> 则显示它。'
    },
  ]
}
