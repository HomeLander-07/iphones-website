// Get the elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; // Clear the current list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="remove" data-index="${index}">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task to the list
function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return; // Don't add empty tasks
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    saveTasks(tasks);
    taskInput.value = ''; // Clear input field
    loadTasks(); // Refresh the task list
}

// Remove task from the list
function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks(); // Refresh the task list
}

// Event listeners
addButton.addEventListener('click', addTask);

taskList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('remove')) {
        const index = e.target.getAttribute('data-index');
        removeTask(index);
    }
});

// Initialize the app
loadTasks();
