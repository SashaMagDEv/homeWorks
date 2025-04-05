const fetchTodos = async () => {
    try {
        const response = await fetch('http://localhost:3001/todos');
        const todos = await response.json();

        todos.forEach(todo => {
            const addLi = document.createElement("li");
            const addBut = document.createElement("button");

            addLi.textContent = todo.title;
            addLi.classList.add("js-group-item", "bg-light", "rounded", "p-2", "d-flex", "justify-content-between");

            addBut.textContent = "Видалити";
            addBut.classList.add("btn", "btn-danger", "btn-sm");
            addBut.addEventListener("click", async () => {

                try {
                    const response = await fetch(`http://localhost:3001/todos/delete/${todo._id}`, {
                        method: 'DELETE',
                    });
                    // console.log("ID завдання", todo._id);
                    if (response.ok) {
                        addLi.remove();
                        console.log('Завдання видалено з БД');
                    } else {
                        console.error('Не вдалося видалити завдання з БД');
                    }
                } catch (err) {
                    console.error('Помилка видалення завдання з БД:', err);
                }
            });

            addLi.appendChild(addBut);
            document.getElementById("listTask").appendChild(addLi);
        });
    } catch (error) {
        console.error('Помилка отримання завдань:', error);
    }
};

fetchTodos();

document.getElementById("addTask").addEventListener("click", async () => {
    const inputTask = document.getElementById("inputTask");
    const textTask = inputTask.value.trim();

    if (textTask !== "") {
        const newTask = {
            title: textTask,
            completed: false
        };

        try {
            const response = await fetch('http://localhost:3001/todos/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            });

            const data = await response.json();
            console.log('Завдання створено:', data);

            const addLi = document.createElement("li");
            const addBut = document.createElement("button");

            addLi.textContent = textTask;
            addLi.classList.add("js-group-item", "bg-light", "rounded", "p-2", "d-flex", "justify-content-between");

            addBut.textContent = "Видалити";
            addBut.classList.add("btn", "btn-danger", "btn-sm");
            addBut.addEventListener("click",() => {
                addLi.remove();
            });

            addLi.appendChild(addBut);
            document.getElementById("listTask").appendChild(addLi);

            inputTask.value = "";
        } catch (err) {
            console.error('Помилка створення завдання:', err);
        }
    } else {
        alert("Введіть завдання!");
    }
});



