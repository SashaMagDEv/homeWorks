document.getElementById("test").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        alert("You click: " + event.target.textContent);
    }
});