(function () {
  var parts = location.href.split('/')
  var file = parts[parts.length -1]
  console.log({
    file: file,
    window: window,
    parent: window.parent,
    top: window.top
  })

  var arr = [
    'window === window.window: ' + (window === window.window),
    'window === window.parent: ' + (window === window.parent),
    'window === window.top: ' + (window === window.top),
    'window === window.self: ' + (window === window.self)
  ]

  var p = document.createElement('p')
  p.innerHTML = arr.join('<br>')
  document.body.appendChild(p)
})()
