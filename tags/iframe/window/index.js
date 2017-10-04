window.onload = function () {
  var el = document.getElementById('fframe')
  var arr = [
    'window.frames === window: ' + log(window.frames === window),
    'window.frames.length === window.length: ' + log(window.frames.length === window.length),
    'window.frames[index]: ' + log(window.frames[0]),
    'window.frames[name]: ' + log(window.frames.f),
    'window.frames[id]: ' + log(window.frames.fframe),
    'document.getElementById(id): ' + log(el),
    'document.getElementById(id).contentWindow: ' + log(el.contentWindow),
    'document.getElementById(id).contentDocument: ' + log(el.contentDocument),
    'iframewindow.frameElement === iframe: ' + log(window.frames.f.frameElement === el)
  ]

  function log (obj) {
    return obj ? obj.toString() : 'undefined'
  }

  document.getElementById('log').value = arr.join('\n')
}
