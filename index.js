const todoList = document.getElementById("todo-list");
const input = document.getElementById("input");

function AddTodo() {
  let strTodo = input.value;
  if (strTodo === "") {
    alert("Insert Something");
  } else if (strTodo === " ") {
    alert("Insert Something");
  } else {
    let li = document.createElement("li");
    li.innerText = strTodo;
    button = document.createElement("button");
    button.setAttribute("id", "remove-list")
    button.innerHTML = "Done";
    li.appendChild(button);
    todoList.appendChild(li);

  }
  input.value = "";
  saveData();
}

todoList.addEventListener("click", (e) => {
    if (e.target.tagName == 'BUTTON'){
        e.target.parentElement.remove()
        saveData()
    }
    
})
function saveData() {
  localStorage.setItem("todo", todoList.innerHTML);
}
function showTask() {
  todoList.innerHTML = localStorage.getItem("todo");
}

showTask();