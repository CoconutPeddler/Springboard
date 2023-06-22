// As a user, you should be able to:
// Done     Add a new todo (by submitting a form)
// Done     Mark a todo as completed (cross out the text of the todo)
// Done    Remove a todo

document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#todo');
    const list = document.getElementById('todoList');
    const input = document.querySelector('#todoTask');
    
    form.addEventListener('submit',function(e){
    
        e.preventDefault();
        console.log(input.value);
    
        const newTask = document.createElement('li');
        newTask.innerText = input.value + ' ';
        list.appendChild(newTask);
        input.value = '';
    
        const newBtn = document.createElement('button');
        newBtn.innerText = 'Complete Task';
        newTask.appendChild(newBtn);
    
    });
    
    list.addEventListener('click', function(e){
        e.target.tagName === 'BUTTON';
        e.target.parentNode.style.textDecoration = "line-through";
    })
    
    list.addEventListener('dblclick', function(e){
        e.target.tagName === 'BUTTON';
        e.target.parentNode.remove();
    })

// Step 1 retrieve from localStorage

    const savedTasks = JSON.parse(localStorage.getItem("Tasks:")) || [];        // note || means 'or'
    for (let i = 0; i < savedTasks.length; i++) {
        const newTask = document.createElement('li');
        newTask.innerText = savedTasks[i].task;
        newTask.isCompleted = savedTasks[i].isCompleted ? true : false;
        if (newTask.isCompleted) {
            newTask.style.textDecoration='line-through';
        }
        list.appendChild(newTask);
    }


    // Saving to localstorage
    const newTask = document.createElement('li');
    newTask.innerText = input.value + ' ';
    
    savedTasks.push({task: newTask.innerText, isCompleted: false});
    localStorage.setItem('Tasks: ', JSON.stringify(savedTasks));
    })
    const list = document.getElementById('todoList');

    list.addEventListener('click', function(e){
        const clickedItem = e.target;

        if(!clickedItem.isCompleted) {
            clickedItem.style.textDecoration = "line-through";
            clickedItem.isCompleted = true;
        } else {
            clickedItem.style.textDecoration = 'none';
            clickedItem.isCompleted = false;
        }
    })







