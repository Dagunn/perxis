
document.addEventListener('DOMContentLoaded', function () {
  const benefitsSwiper = new Swiper('.benefits__slider', {
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 34,
    loop: false,
    autoHeight: true,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});