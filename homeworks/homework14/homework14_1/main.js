let images = [
    "https://kartinki.pics/uploads/posts/2022-02/thumbs/1645826186_61-kartinkin-net-p-kartinki-pro-leto-krasivie-77.jpg",
    "https://sotni.ru/wp-content/uploads/2023/08/letniaia-priroda-10.webp",
    "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-powder-smoke-colorful-background-image_2164096.jpg",
    "https://lafoy.ru/photo_l/foto-4119-0.jpg",
    "https://images.wallpaperscraft.ru/image/single/lodka_gory_ozero_135258_1280x720.jpg",
    "https://lifehacker.ru/wp-content/uploads/2013/05/50800-2560x1600.jpg"
];

let current = 0;

const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
const imgSlider = document.getElementById("sliderImg");
const dotsContainer = document.getElementById("dots")

function updateImage() {
    imgSlider.src = images[current];
    updateDots();

    if (current === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if (current === images.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}
updateImage()

function updateDots() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === current)
    })
}
function createDots() {
    images.forEach((_, index) =>{
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            current = index;
            updateImage();
        })
        dotsContainer.appendChild(dot)
    })
    updateDots()
}
nextBtn.addEventListener("click", () => {
    current = (current + 1);
    updateImage();
})
prevBtn.addEventListener("click", () => {
    current = (current - 1);
    updateImage();
})
createDots();


