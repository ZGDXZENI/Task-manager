let taskinput = document.getElementById("taskinput");
let taskcontainer = document.getElementById("taskcontainer");
let tasks = [];
function addTask(){
    if (taskinput.value.trim() == ""){
        taskinput.value = "";
        return;
    }
    tasks.push({
        name: taskinput.value,
        isCompleted: false
    });
    taskinput.value = "";
    localStorage.setItem("tasklist",JSON.stringify(tasks));
    displayTasks();
}
function displayTasks(){
    taskcontainer.innerHTML="";
    tasks = JSON.parse(localStorage.getItem("tasklist"))?JSON.parse(localStorage.getItem("tasklist")): [];
    tasks.forEach((task,index) => {
        taskcontainer.innerHTML= taskcontainer.innerHTML + `<div class="task">
            <p style="${task.isCompleted?'text-decoration:line-through': ''}">
               ${task.name}
            </p>
            <div class="whattodo">
                <div class="check">
                    <span class="tick"
                    style="${task.isCompleted?'opacity:1':'opacity:0'}"
                        onclick="toggleTick(${index})">
                        ✓
                    </span>
                </div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        </div>`
    });
    console.log(tasks);
}
function toggleTick(index){
    tasks[index].isCompleted = !(tasks[index].isCompleted);
    localStorage.setItem("tasklist",JSON.stringify(tasks));
    displayTasks();
}
function deleteTask(index){
    tasks.splice(index,1);
     localStorage.setItem("tasklist",JSON.stringify(tasks));
    displayTasks();
}
function editTask(index){
    tasks[index].name = prompt("Enter the new value: ");
     localStorage.setItem("tasklist",JSON.stringify(tasks));
    displayTasks();
}
displayTasks();