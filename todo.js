var input = document.getElementById('input');
var button = document.getElementById('btn');

//this function will make sure that the input element is empty
//when the document loads or refreshes
(function Ready() {
  'use strict';
  input.value = "";
}());

function CreateList(){
  var cont = document.getElementById('contents');

  //create an paragraph element
  var p = document.createElement('p');

  var newDiv = document.createElement('div');
  newDiv.className = "item";

  var removeBtn = document.createElement('button');
  removeBtn.textContent = "X";
  removeBtn.type = "button";
  removeBtn.name = "removeButton";
  removeBtn.className = "rBtn";

  if(input.value !== ""){
    p.textContent = input.value;

    newDiv.appendChild(p);
    newDiv.appendChild(removeBtn);
    cont.appendChild(newDiv);

    //clear input field
    input.value = "";
  }
  else {
    alert("Error, nothing in text field");
  }

  var deleteItem = document.getElementsByClassName('rBtn');

  for (var i = 0; i < deleteItem.length; i++) {
  deleteItem[i].addEventListener('click', removeItems, false);
  }
}
button.addEventListener('click', CreateList, false);

function removeItems(){
  this.parentElement.remove(this);
}
