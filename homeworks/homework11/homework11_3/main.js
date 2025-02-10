document.getElementById("img").innerHTML = getImg();

document.getElementById('randomBtn').addEventListener("click", () => {
    document.getElementById("img").innerHTML = getImg();
});
function getImg() {
    const random = Math.floor(Math.random() * 9) +1;
    return '<img alt="image" src="img/' + random + '.jpg" ' +
        'style="width: 400px; height: 300px; object-fit: cover;" />';
}
