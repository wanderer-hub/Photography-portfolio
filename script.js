document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function () {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = `<img src="${this.src}" class="zoomed">`;
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {
            overlay.remove();
        });
    });
});
const images = document.querySelectorAll('.gallery img');

function revealOnScroll() {
    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imageTop < windowHeight) {
            image.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);