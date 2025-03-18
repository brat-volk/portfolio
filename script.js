let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}