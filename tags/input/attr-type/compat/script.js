var rows = document.getElementById('table').tBodies[0].rows
var select = document.getElementById('check-html5')
select.addEventListener('change', function (e) {
  Array.prototype.forEach.call(rows, function (row) {
    if (!row.classList.contains('html5')) {
      row.classList.toggle('hidden')
    }
  })
})
