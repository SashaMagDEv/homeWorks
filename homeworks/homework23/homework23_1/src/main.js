const fetchTodos = async () => {
    try {
        const response = await fetch('http://localhost:3001/todos');
        const todos = await response.json();

        todos.forEach(todo => {
            const addLi = document.createElement("li");
            const addBut = document.createElement("button");
            const editBut = document.createElement('button');
            const taskText = document.createElement("span");

            taskText.textContent = todo.title;
            if (todo.completed) {
                taskText.style.textDecoration = "line-through";
            }
            taskText.classList.add("me-auto");

            addLi.classList.add("js-group-item", "bg-light", "rounded", "p-2", "d-flex", "justify-content-between");

            editBut.textContent = "Редагувати";
            editBut.classList.add("btn", "btn-primary", "btn-sm", "me-2");
            editBut.addEventListener("click", async () => {
                const newTitle = prompt("Введіть новий текст завдання:", todo.title);
                if (newTitle && newTitle.trim() !== "") {
                    try {
                        const response = await fetch(`http://localhost:3001/todos/update/${todo._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ title: newTitle.trim() })
                        });

                        if (response.ok) {
                            taskText.textContent = newTitle.trim();
                            console.log("Завдання оновлено");
                        } else {
                            console.error("Помилка при оновленні");
                        }
                    } catch (error) {
                        console.error("Помилка запиту на оновлення:", error);
                    }
                }
            });

            addBut.textContent = "Видалити";
            addBut.classList.add("btn", "btn-danger", "btn-sm");
            addBut.addEventListener("click", async () => {
                try {
                    const response = await fetch(`http://localhost:3001/todos/delete/${todo._id}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        addLi.remove();
                        console.log('Завдання видалено');
                    } else {
                        console.error('Не вдалося видалити завдання');
                    }
                } catch (err) {
                    console.error('Помилка видалення завдання:', err);
                }
            });

            taskText.addEventListener("click", async () => {
                const newCompletedStatus = !todo.completed;  // Перемикаємо статус

                taskText.style.textDecoration = newCompletedStatus ? "line-through" : "none";

                try {
                    const response = await fetch(`http://localhost:3001/todos/update/${todo._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ completed: newCompletedStatus })
                    });

                    if (response.ok) {
                        todo.completed = newCompletedStatus;
                        console.log("Статус завдання оновлено");
                    } else {
                        console.error("Помилка при оновленні статусу");
                    }
                } catch (error) {
                    console.error("Помилка запиту на оновлення статусу:", error);
                }
            });

            const buttonCont = document.createElement('div');
            buttonCont.appendChild(editBut);
            buttonCont.appendChild(addBut);

            addLi.appendChild(taskText);
            addLi.appendChild(buttonCont);
            document.getElementById("listTask").appendChild(addLi);
        });
    } catch (error) {
        console.error('Помилка отримання завдань:', error);
    }
};

fetchTodos();


