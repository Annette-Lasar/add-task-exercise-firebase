let tasks = [];

async function init() {
  await fetchTasks();
}

async function fetchTasks() {
  const response = await fetch("../jsons/tasks.json");
  data = await response.json();
  tasks = data;
  //   console.log(tasks);
}

function createTask() {
  const form = document.querySelector("#task_form");
  const formData = new FormData(form);

  for (const entry of formData) {
    console.log(entry[1]);
  }

  const newTask = Object.fromEntries(formData);

  //   const title = document.getElementById("task_title").value;
  //   const category = document.getElementById("task_category").value;
  //   console.log(title);

  //   const newTask = {
  //     category: document.getElementById("task_category").value,
  //     title: title,
  //     description: "",
  //     dueDate: "",
  //     priority: "medium",
  //     assignedTo: [],
  //     status: "toDo",
  //     position: 0,
  //     subtasks: [],
  //   };

  console.log(newTask);
}

init();
