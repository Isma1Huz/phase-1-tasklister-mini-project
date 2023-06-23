// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   let form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     handleClick(e.target.new-task-description.value)
//     form.reset();
//   })
 

// });

// function handleClick(todo){
  
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   p.appendChild(btn)
//   p.textContent = `${todo}`
//   btn.addEventListener('click',handleDelete)
//   document.getElementById('tasks').appendChild(p)
//   console.log(p);
// }
// function handleDelete(e){
//   e.target.parentNode.remove()
// }
// OO solution
document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const taskList = new TaskList();
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  //attach event listeners

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});