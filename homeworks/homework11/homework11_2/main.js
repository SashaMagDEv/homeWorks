const button = document.getElementById("changeColor");
const text = document.getElementById("text")

function toggleColor() {
    if (text.style.color === "black" && text.style.borderColor === "red") {
        text.style.color = "red";
        text.style.borderColor = "black"
    } else {
        text.style.color = "black";
        text.style.borderColor = "red";
    }
}
button.addEventListener("click", toggleColor);