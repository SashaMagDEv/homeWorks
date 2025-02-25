const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let tasks = [];

function loadTasks() {
    const taskJSON = localStorage.getItem("tasks");
    if (taskJSON) {
        tasks = JSON.parse(taskJSON);
    } else {
        tasks = [];
    }
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    todosWrapper.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (task.done) {
            li.classList.add('todo-item--checked');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.addEventListener('change', () => {
            tasks[index].done = checkbox.checked;
            saveTasks();
            renderTasks()
        })

        const span = document.createElement('span');
        span.classList.add('todo-item__description');
        span.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('todo-item__delete');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        })

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        todosWrapper.appendChild(li);

    })
}
loadTasks();
renderTasks();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText !== '') {
        tasks.push({text: taskText, done: false});
        input.value = '';
        saveTasks();
        renderTasks();
    }
})
