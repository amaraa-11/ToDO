function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTaskToList("todoList", taskText);
    taskInput.value = "";
  }
}

function addTaskToList(listId, taskText) {
  const list = document.getElementById(listId);
  const li = document.createElement("li");

  li.innerHTML = <span>${taskText}</span>;

  list.appendChild(li);
}

function moveTask(button, targetListId) {
  const taskItem = button.closest("li");
  const taskText = taskItem.querySelector("span").innerText;

  taskItem.remove();
  addTaskToList(targetListId, taskText);
}
function deleteButton() {}
