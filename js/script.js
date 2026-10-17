const url =
  "https://crud-practice-d9604-default-rtdb.europe-west1.firebasedatabase.app/";
let tasks = [];

async function init() {
  await fetchTasks();
}

async function fetchTasks() {
  const response = await fetch(url + "json");
  const data = await response.json();
  tasks = data;
}

function createTask() {
  const form = document.querySelector("#task_form");
  const formData = new FormData(form);

  for (const entry of formData) {
    console.log(entry[1]);
  }

  const newTask = Object.fromEntries(formData);

  console.log(newTask);
}

// init();
