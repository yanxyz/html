// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
//

function updateSize() {
  var files = document.getElementById('uploadInput').files
  var filesCount = files.length
  var bytes = 0
  for (var i = 0; i < filesCount; i++) {
    bytes += files[i].size
  }

  var fileSize = bytes + ' bytes'
  // optional code for multiples approximation
  if (bytes > 1024) {
    var multiples = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    var approx = bytes / 1024
    i = 0
    while (approx > 1024) {
      approx /= 1024
      i++
    }
    fileSize = approx.toFixed(3) + ' ' + multiples[i] + ' (' + bytes + ' bytes)'
  }

  // end of optional code
  document.getElementById('fileNum').innerHTML = filesCount
  document.getElementById('fileSize').innerHTML = fileSize
}

document.addEventListener('DOMContentLoaded', updateSize)
document.getElementById('uploadInput').addEventListener('change', updateSize)
