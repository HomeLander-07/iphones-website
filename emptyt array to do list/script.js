// Initialize an empty array to store tasks
let tasks = [];

// Function to render tasks on the screen
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';  // Clear existing list items

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} <button onclick="removeTask(${index})">Delete</button>`;
        taskList.appendChild(listItem);
    });
}

// Function to add a task to the array
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Add the task to the tasks array
        tasks.push(taskText);
        taskInput.value = '';  // Clear the input field

        // Re-render the task list
        renderTasks();
    }
}

// Function to remove a task from the array
function removeTask(index) {
    // Remove the task from the array based on index
    tasks.splice(index, 1);

    // Re-render the task list
    renderTasks();
}
