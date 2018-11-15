var form = document.getElementById('add-item')
var input = document.getElementById('input')

function addItem(e) {
  e.preventDefault()
  var item = input.value 
 list.innerHTML += "<li>" + item + "</li>"

 form.reset()
}

form.addEventListener('submit', addItem)