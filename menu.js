
let index = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showSlides, 3000); // Altera a imagem a cada 3 segundos
