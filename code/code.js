let buttonAdd = document.getElementById("button-add")
const ul = document.getElementById("list")
let input = document.getElementById("input-text")
let trashButtons = document.getElementsByClassName("trash-button")
let arr = []




addToDO = () => {

   const li = document.createElement('li');
   const textSpan = document.createElement('span');
   textSpan.classList.add('todo-text');
   const newTodo = input.value;
   textSpan.append(newTodo);

   const deleteBtn = document.createElement('span');
   deleteBtn.classList.add('todo-trash');
   const icon = document.createElement('button');
   icon.innerHTML = '&#10060;';
   icon.classList.add('trash');
   deleteBtn.appendChild(icon);


   ul.appendChild(li).append(textSpan, deleteBtn);
   input.value = '';

   listenDeleteTodo(deleteBtn)


}


function listenDeleteTodo(element) {
   element.addEventListener('click', (event) => {
      element.parentElement.remove();
      event.stopPropagation();
   });
}

buttonAdd.addEventListener("click", addToDO)

