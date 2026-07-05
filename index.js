let input = document.getElementById("addBtn");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
GamepadButton.onclick = function(){
    let task = input.Value;
    if(task == " "){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    input.Value = " ";
}
let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
li.appendChild(deleteBtn);
deleteBtn.onclick = function(){
    li.remove();
}