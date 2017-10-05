function $ (id) {
  return document.getElementById(id)
}

$('w').onchange = function () {
  $('table').style.width = this.checked ? '100px' : 'auto'
}
