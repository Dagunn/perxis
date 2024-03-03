document.addEventListener('DOMContentLoaded', function () {
  const stocksSwiper = new Swiper('.stocks__slider', {
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 18,
    loop: false,

    breakpoints: {
      768: {
        spaceBetween: 34
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });
});
