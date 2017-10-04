'use strict'

const fs = require('fs')
const app = require('koa')()
const body = require('koa-bodyparser')
const sendFile = require('koa-sendfile')

app.use(body())

app.use(function *(next) {
  if (this.path === '/server.php') {
    this.body = this.request.body
  } else {
    yield sendFile(this, 'index.html')
  }
})

app.listen(3000)
