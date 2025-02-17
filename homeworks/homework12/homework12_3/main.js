// document.getElementById("listTask").addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         event.target.remove();
//     }
// })
document.getElementById("addTask").addEventListener("click", () => {
    const inputTask = document.getElementById("inputTask");
    const textTask = inputTask.value.trim();

    if (textTask !== "") {
        const addLi = document.createElement("li");
        const addBut = document.createElement("button")

        addLi.textContent = textTask;
        addLi.classList.add("list-group-item", "bg-light", "rounded", "p-2", "d-flex", "justify-content-between");

        addBut.textContent = "Видалити";
        addBut.classList.add("btn", "btn-danger", "btn-sm");
        addBut.addEventListener("click", () => {
            addLi.remove();
        });

        addLi.appendChild(addBut);
        document.getElementById("listTask").appendChild(addLi);
        inputTask.value = "";
    }
    else {
        alert("Введіть завдання!");
    }
});