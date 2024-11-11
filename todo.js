// task nemeh

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.className = "todo-item";

    // ajliin ner
    const taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    li.appendChild(taskText);

    // ustgah towch
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Устгах";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Hello!");
  }
}
