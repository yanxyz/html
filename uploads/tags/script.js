/* global DATA, TAGS */

build()

/**
 * build page
 */

function build() {
  const tbody = getRows().join('\n')
  const table = `
  <table id="table-tags">
    <thead>
      <tr>
        <th>标签</th>
        <th>说明</th>
        <th style="min-width: 120px"></th>
      </tr>
    </thead>
    <tbody>
      ${tbody}
    </tbody>
  </table>
  `

  $('#table-container').innerHTML = table
}

function getRows() {
  const whatwg = 'https://html.spec.whatwg.org/multipage'
  const mdn = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
  const baseurl = '/html/tags'
  const rows = []
  Object.keys(DATA).forEach(key => {
    DATA[key].forEach(item => {
      const { name, desc, spec } = item
      const classNames = spec ? spec.match(/^(.*)\.html/)[1] : 'obsolete'

      let nameText = `&lt;${name}&gt;`
      if (TAGS.includes(name)) {
        nameText = `<a href="${baseurl}/${name}/">${nameText}</a>`
      }

      const links = [`<a href="${mdn}/${name}">MDN</a>`]
      if (spec) {
        links.unshift(`<a href="${whatwg}/${spec}">Spec</a>`)
      }

      rows.push(`
          <tr class="${classNames}" data-name="${name}" data-group="${key}">
            <td>${nameText}</td>
            <td>${escapeHTML(desc)}</td>
            <td>${links.join(' ')}</td>
          </tr>
          `)
    })
  })
  return rows
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * filter
 */

const rows = Array.from($('#table-tags').tBodies[0].rows)
const $num = $('#num')
$num.textContent = rows.length

$('#filter').addEventListener('input', function () {
  const value = this.value.trim().toLowerCase()
  filter(value)
})

$('#group').addEventListener('change', function () {
  const value = this.value

  if (!value) {
    return showAll()
  }

  var n = 0
  rows.forEach(tr => {
    if (tr.classList.contains(value)) {
      ++n
      show(tr)
    } else {
      hide(tr)
    }
  })
  $num.textContent = n
})

function filter(kw) {
  if (!kw) {
    return showAll()
  }

  let n = 0
  const t = test()
  rows.forEach(tr => {
    var tagName = tr.dataset.name
    if (t(tagName)) {
      show(tr)
    } else {
      hide(tr)
      ++n
    }
  })
  $num.textContent = n

  function test() {
    if (kw.length > 1) {
      const last = kw.slice(-1)
      switch (last) {
        case '$':
          kw = kw.slice(0, -1)
          return tagName => tagName.endsWith(kw)
        case '=':
          kw = kw.slice(0, -1)
          return tagName => tagName === kw
        case '^':
          kw = kw.slice(0, -1)
          return tagName => tagName.startsWith(kw)
      }
    }
    return tagName => tagName.includes(kw)
  }
}

function showAll() {
  rows.forEach(x => show(x))
  $num.textContent = rows.length
}

/**
 * helpers
 */

function $(selector) {
  return document.querySelector(selector)
}

function show(el) {
  el.removeAttribute('hidden')
}

function hide(el) {
  el.setAttribute('hidden', '')
}
