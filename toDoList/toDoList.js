const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function(){
    const taskText = taskInput.value;
    
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.append(newTask);
        taskInput.value = '';
    } else {
        alert('Введите задачу!');
    }
});

taskList.addEventListener('click', function(evt){
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('completed');
    }
});