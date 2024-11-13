document.getElementById("add-task").addEventListener("click", () => {
  const taskText = prompt("Enter task");
  if (taskText) {
    createTaskElement(taskText, "to-do");
  }
});

function createTaskElement(text, columnId) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", true);
  task.addEventListener("dragstart", (e) => dragStart(e));

  const taskContent = document.createElement("span");
  taskContent.textContent = text;

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const newText = prompt("Edit task ", taskContent.textContent);
    if (newText) {
      taskContent.textContent = newText;
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    task.remove();
  });

  taskButtons.appendChild(editButton);
  taskButtons.appendChild(deleteButton);
  task.appendChild(taskContent);
  task.appendChild(taskButtons);

  document.getElementById(columnId).appendChild(task);
}
