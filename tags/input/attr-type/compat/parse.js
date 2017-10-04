#!/usr/bin/env node

const fs = require('fs')
const yaml = require('js-yaml')

function tr (data) {
  const d = {}
  const browsers = ['chrome', 'ie', 'edge', 'firefox', 'safari']

  Object.keys(data).forEach(function (x) {
    if (x === 'example') {
      d[x] = data[x] || `<input type="${data.type}" />`
      return
    }

    if (browsers.indexOf(x) > -1) {
      if (data[x] === -1) {
        d[x] = '&cross;'
      } else {
        d[x] = data[x] || ''
      }
      return
    }

    d[x] = data[x] || ''
  })

  return `
    <tr class="${d['class']}">
      <td>${d.type}</td>
      <td>${d.title}</td>
      <td>${d.example}</td>
      <td>${d.description}</td>
      <td>${d.chrome}</td>
      <td>${d.ie}</td>
      <td>${d.firefox}</td>
      <td>${d.safari}</td>
    </tr>
    `
}

function table (data) {
  let tbody = ''
  Object.keys(data).forEach(function (x) {
    tbody += tr(data[x])
  })

  return `
    <table id="table">
      <thead>
        <tr>
          <th>type</th>
          <th></th>
          <th>example</th>
          <th style="width: 200px">description</th>
          <th>Chrome</th>
          <th>IE</th>
          <th>Firefox</th>
          <th>Safari</th>
        </tr>
      </thead>
      <tbody>
      ${tbody}
      </tbody>
    </table>
    `
}

const dataString = fs.readFileSync('data.yaml', 'utf8')
const data = yaml.safeLoad(dataString, {
  schema: yaml['JSON_SCHEMA'] // do not convert date
})
const html = fs.readFileSync('tpl.html', 'utf8')
  .replace('$table$', table(data))
fs.writeFileSync('index.html', html)
