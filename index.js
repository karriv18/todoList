const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-cotainer");

function addTask() {
  if (inputBox.value === "") {
    alert("Add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveTask();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveTask() {
  localStorage.setItem("todo", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("todo");
}
showTask();
