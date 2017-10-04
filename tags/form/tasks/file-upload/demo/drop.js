// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
//
// IE10
//
//

function sendFile(file) {
  var url = 'upload.php'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()

  xhr.open('POST', url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText) // handle response.
    }
  }
  formData.append('myFile', file)
  // Initiate a multipart/form-data upload
  xhr.send(formData)
}

window.onload = function () {
  var dropzone = document.getElementById('dropzone')
  dropzone.ondragover = dropzone.ondragenter = function (event) {
    event.stopPropagation()
    event.preventDefault()
  }

  dropzone.ondrop = function (event) {
    event.stopPropagation()
    event.preventDefault()

    var filesArray = event.dataTransfer.files
    for (var i = 0; i < filesArray.length; i++) {
      sendFile(filesArray[i])
    }
  }
}
