function t(src) {
  var s = document.createElement('script')

  s.onerror = function () {
    log('script.onerror')
    console.log('script.onerror')
    console.log(arguments)
  }

  window.onerror = function () {
    log('window.onerror')
    console.log('window.onerror')
    console.log(arguments)
  }

  if (window.addEventListener) {
    window.addEventListener('error', function () {
      log('window.addEventListener')
      console.log('window.addEventListener')
      console.log(arguments)
    })

    window.addEventListener('error', function () {
      log('window.addEventListener capture')
      console.log('window.addEventListener capture')
      console.log(arguments)
    }, true)
  }

  s.src = src

  document.body.appendChild(s)
}

function log(message) {
  var el = document.getElementById('output')
  el.value += message + '\n'
}

function clear() {
  document.getElementById('output').value = ''
}
