document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const sidebar = document.querySelector('.sidebar');

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('opened');
    sidebar.classList.toggle('opened');
  });


  const headerSlider = new Swiper('.header__slider', {
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    navigation: {
      nextEl: '.header__slider-next',
      prevEl: '.header__slider-prev',
    },
  });

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector(".header");
    let swiperPagination = document.querySelector(".header__slider-pagination");

    if (currentScroll > lastScrollTop) {

      header.classList.add("fixed");
      swiperPagination.classList.add('header-fixed');
    } else {

      header.classList.remove("fixed");
      swiperPagination.classList.remove('header-fixed');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);

});


