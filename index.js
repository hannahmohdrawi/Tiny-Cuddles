//Banner

let currentIndex = 0;
const banners = document.querySelectorAll('.banner-image');

function showSlide(index) {
    banners.forEach((banner, i) => {
        banner.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
}