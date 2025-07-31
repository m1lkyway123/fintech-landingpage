const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});


const swiper = new Swiper(".reviews__slider", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});