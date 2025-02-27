// get references to DOM elements
const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');
const clearButton = document.querySelector('.clear');

// function to add a new task to the list
function addTask(e) {
  // prevent form submission
  e.preventDefault();
  
  // get input value and trim whitespace
  const taskName = input.value.trim();
  
  // if input is not empty
  if (taskName !== '') {
    // create a new list item
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    // set text content and attributes for new elements
    span.textContent = taskName;
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    
    // append new elements to list item
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    
    // reset input value
    input.value = '';
  }
}

// function to edit a task
function editTask(e) {
  // get reference to list item and span
  const li = e.target.closest('li');
  const span = li.querySelector('span');
  
  // prompt user for new task name
  const newTaskName = prompt('Enter new task name:', span.textContent);
  
  // if user entered a new task name
  if (newTaskName !== null) {
    // update task name in list
    span.textContent = newTaskName.trim();
  }
}

// function to delete a task
function deleteTask(e) {
  // get reference to list item
  const li = e.target.closest('li');
  
  // remove list item from list
  li.remove();
}

// function to clear all tasks
function clearTasks() {
  // remove all list items from list
  ul.innerHTML = '';
}

// event listeners
form.addEventListener('submit', addTask);
ul.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit')) {
    editTask(e);
  } else if (e.target.classList.contains('delete')) {
    deleteTask(e);
  }
});
clearButton.addEventListener('click',clearTasks);
