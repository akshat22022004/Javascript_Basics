// we do all the tasks once the dom content is completely loaded

document.addEventListener('DOMContentLoaded', () => { 
        // step1 grab the elements

// grab the input
const todoinput = document.getElementById("todo-item");
const addtaskbutton = document.getElementById("add-task");

// grab the list
const todolist = document.getElementById("todo-list");

// store them in an array now

let tasks = json.parse(localStorage.getItem("tasks"))|| [];
tasks.array.forEach(tasks => rendertask(tasks));

addtaskbutton.addEventListener("click", () => {
    // grab the value from the input
    const task = todoinput.value.trim();

    if(task === "") return; // if the task is empty return

    const newtask  = {
        id: Date.now(),
        text: task,
        iscompleted:  false
    }
    tasks.push(newtask);
    saveTask(); // here we call the function and can store the task direct in the local  storage
    todoinput.value = ""; // clears the input;
    
})
// to store in the local storage (api or local storage)
function saveTask() {
     localStorage.setItem("tasks", JSON.stringify(tasks)); // here the value should be string (no other option avilable) so we use JSON.stringify
}

// render the  task
function rendertask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if(task.iscompleted) li.classList.add("completed");
    li.innerHTML = `<span>${task.text}</span><button class="delete-task">Delete</button>`;


    li.addEventListener("click", () => {
        if(e.target.tagname == `BUTTON`) return;
        task.iscompleted = !task.iscompleted;
        saveTask();
        li.classList.toggle("completed");
    })
   

    li.querySelector(".delete-task").addEventListener("click", (e) => {
        e.stopPropagation(); // so to avoid the event from bubbling up to the parent 
        tasks = tasks.filter((t) => t.id !== task.id); // all the elements which do not match come here
        saveTask();
        li.remove();
    })
    todolist.appendChild(li);
    }
})