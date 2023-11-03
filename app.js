
let num = null
let putData = document.getElementById("display");

function generateTable(e){
  e.preventDefault()
  let i;
  for(i = 1; i<=10; i++){
    putData.innerHTML+=num+ " x " + i + " = " + num * i+"<br>";

  }
  let form = document.getElementById("num")
  form.value = null
}

function getNumber(e){
  num = e.target.value
  putData.innerHTML = null
}