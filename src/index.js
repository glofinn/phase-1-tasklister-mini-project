const form = document.querySelector("#create-task-form");
const tasks = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target["new-task-description"].value);
  let newTask = document.createElement("li");
  newTask.textContent = e.target["new-task-description"].value;
  tasks.append(newTask);
});
