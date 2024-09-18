'use strict';

const taskInput = document.getElementById('taskValue');
// Button that adds the task
const btnAddTask = document.getElementById('btnAdd');
const taskContainer = document.getElementById('task--container');


// when press button
btnAddTask.addEventListener('click', function() {
    if(taskInput.value !== '') {
        addTask();
    }
    // clears the input value so its empty and you can add another task
    taskInput.value = '';

});

// when click enter
window.addEventListener('keypress', function(e) {
    if(taskInput.value !== '') {
        if(e.key == 'Enter') {
            addTask();
            taskInput.value = '';
        }
        // e.key == 'Enter' ? addTask() : false; This is broken and i know why lol 😃
    } 
    
});



function addTask() {

        // Task with input
        const task = document.createElement('div');
        task.classList = 'tasks-container';
        task.innerHTML = `-> ${taskInput.value}`;
        taskContainer.appendChild(task);

        

        //Delete button
        
        const deleteButton = document.createElement('button');
        deleteButton.classList = 'btn-remove';
        deleteButton.innerHTML = 'Delete';
        task.appendChild(deleteButton);

        //Buttons function to delete 
        deleteButton.addEventListener('click', function() {
            taskContainer.removeChild(task);
            
        });
    };
