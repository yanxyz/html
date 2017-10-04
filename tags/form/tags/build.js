#!/usr/bin/env node

const fs = require('fs')
const data = require('./data')

const elements = ['input', 'textarea', 'select', 'button', 'fieldset', 'output',
  'img', 'object', 'keygen',
  'meter', 'progress', 'label'
]

const html = fs.readFileSync('tpl.html', 'utf8')
  .replace('{{table}}', table())
fs.writeFileSync('index.html', html)

function table () {
  const tbody = data.map((x) => {
    return `
    <tr>
      <th>${x.name}</th>
      ${tds(x.elements)}
      <td>${x.elements.length}</td>
    </tr>
  `
  }).join('\n')

  return `
<table>
  ${thead()}
  ${tbody}
</table>
`
}

function thead () {
  const ths = elements.map((x) => `<th>${x}</th>`).join('\n')
  return `
    <tr>
      <th></th>
      ${ths}
      <th></th>
    </tr>
`
}

function tds (list) {
  return elements.map((x) => {
    if (list.includes(x)) {
      return '<td class="yes">Yes</td>'
    } else {
      return '<td class="no">No</td>'
    }
  }).join('\n')
}
