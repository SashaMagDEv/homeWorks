let link = "";
const getURL = document.getElementById("getURL");
const  transition = document.getElementById("transition");


getURL.addEventListener("click", () => {
    const input = prompt('Введіть посилання');

    if (input) {
        link = input;
        alert('Посилання додано');
        transition.style.color = "yellow";
        transition.style.background = "blue";
    }
});

transition.addEventListener("click", () => {
    if (link) {
        window.location.href = link;
    } else {
        alert('Введіть посилання');
    }
});

