#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const list = []
const tagsDir = path.join(__dirname, '../../tags/')
fs.readdirSync(tagsDir).forEach(file => {
  const fullname = path.join(tagsDir, file, 'index.md')
  if (fs.existsSync(fullname)) {
    // fs.writeFileSync(fullname, fs.readFileSync(fullname, 'utf8').replace(/^---[^#]+#/, '#'))
    list.push(file)
  }
})
fs.writeFileSync('list.js', 'var TAGS = ' + JSON.stringify(list))
