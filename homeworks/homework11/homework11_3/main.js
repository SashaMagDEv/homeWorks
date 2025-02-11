
const img = document.getElementById("img");
img.style.width = "400px";
img.style.height = "300px";
img.style.objectFit = "cover";

function getImg() {
    const random = Math.floor(Math.random() * 9) +1;
    return `img/${random}.jpg`;
}
document.getElementById('randomBtn').addEventListener("click", () => {
    document.getElementById("img").src = getImg();
});