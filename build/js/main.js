document.addEventListener("DOMContentLoaded",function(){new Swiper(".benefits__slider",{slidesPerView:"auto",speed:800,spaceBetween:34,loop:!1,autoHeight:!0,pagination:{el:".swiper-pagination",clickable:!0}})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".burger-menu");const a=document.querySelector(".sidebar");e.addEventListener("click",function(){this.classList.toggle("opened"),a.classList.toggle("opened")});new Swiper(".header__slider",{speed:800,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".header__slider-next",prevEl:".header__slider-prev"}});let n=0;window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop,a=document.querySelector(".header"),s=document.querySelector(".header__slider-pagination");e>n?(a.classList.add("fixed"),s.classList.add("header-fixed")):(a.classList.remove("fixed"),s.classList.remove("header-fixed")),n=e<=0?0:e},!1)}),document.addEventListener("DOMContentLoaded",function(){ymaps.ready(function(){let e=new ymaps.Map("map",{center:[55.755831,37.617673],zoom:10}),a=[{name:"Ховрино",coordinates:[55.869,37.486],description:`
          <h3 class="map-info__title">Dealer Company Name</h3>
          <p class="map-info__address">Ховрино, ул. Автодилерская, 23, стр. 1</p>
          <div class="flex align-center map-info__contacts">
            <div class="map-info__contacts-left">
              <p class="map-info__sells">Продажи:</p>
              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>
              <span class="map-info__work">пн-пт: 09:00-21:00,</span>
              <span class="map-info__work">сб, вс: 10:00-20:00</span>
            </div>
            <div class="map-info__contacts-right">
              <p class="map-info__service">Cервис:</p>
              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>
              <span class="map-info__work">пн-сб: 08:00-22:00,</span>
              <span class="map-info__work">вс: 09:00-21:00</span>
            </div>
          </div>
          <button class="btn map-info__btn flex align-center">
          Задать вопрос

          <svg class="icon" width="15" height="15">
            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>
          </svg>
        </button>
        `,iconLayout:"default#image",iconImageHref:"img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Мытищи",coordinates:[55.911,37.733],description:`
          <h3 class="map-info__title">Dealer Company Name</h3>
          <p class="map-info__address">Мытищи, ул. Автодилерская, 23, стр. 1</p>
          <div class="flex align-center map-info__contacts">
            <div class="map-info__contacts-left">
              <p class="map-info__sells">Продажи:</p>
              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>
              <span class="map-info__work">пн-пт: 09:00-21:00,</span>
              <span class="map-info__work">сб, вс: 10:00-20:00</span>
            </div>
            <div class="map-info__contacts-right">
              <p class="map-info__service">Cервис:</p>
              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>
              <span class="map-info__work">пн-сб: 08:00-22:00,</span>
              <span class="map-info__work">вс: 09:00-21:00</span>
            </div>
          </div>
          <button class="btn map-info__btn flex align-center">
          Задать вопрос

          <svg class="icon" width="15" height="15">
            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>
          </svg>
        </button>
        `,iconLayout:"default#image",iconImageHref:"img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Красногорск",coordinates:[55.831178,37.329729],description:`
          <h3 class="map-info__title">Dealer Company Name</h3>
          <p class="map-info__address">Красногорск, ул. Автодилерская, 23, стр. 1</p>
          <div class="flex align-center map-info__contacts">
            <div class="map-info__contacts-left">
              <p class="map-info__sells">Продажи:</p>
              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>
              <span class="map-info__work">пн-пт: 09:00-21:00,</span>
              <span class="map-info__work">сб, вс: 10:00-20:00</span>
            </div>
            <div class="map-info__contacts-right">
              <p class="map-info__service">Cервис:</p>
              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>
              <span class="map-info__work">пн-сб: 08:00-22:00,</span>
              <span class="map-info__work">вс: 09:00-21:00</span>
            </div>
          </div>
          <button class="btn map-info__btn flex align-center">
          Задать вопрос

          <svg class="icon" width="15" height="15">
            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>
          </svg>
        </button>
      `,iconLayout:"default#image",iconImageHref:"img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Москва",coordinates:[55.755831,37.617673],description:`
        <h3 class="map-info__title">Dealer Company Name</h3>
        <p class="map-info__address">Москва, ул. Автодилерская, 23, стр. 1</p>
        <div class="flex align-center map-info__contacts">
          <div class="map-info__contacts-left">
            <p class="map-info__sells">Продажи:</p>
            <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>
            <span class="map-info__work">пн-пт: 09:00-21:00,</span>
            <span class="map-info__work">сб, вс: 10:00-20:00</span>
          </div>
          <div class="map-info__contacts-right">
            <p class="map-info__service">Cервис:</p>
            <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>
            <span class="map-info__work">пн-сб: 08:00-22:00,</span>
            <span class="map-info__work">вс: 09:00-21:00</span>
          </div>
        </div>
        <button class="btn map-info__btn flex align-center">
        Задать вопрос

        <svg class="icon" width="15" height="15">
          <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>
        </svg>
      </button>
      `,iconLayout:"default#image",iconImageHref:"img/icons/pin-white.svg",iconImageSize:[68,68]}],i=null;a.forEach(function(s){let n=new ymaps.Placemark(s.coordinates,{hintContent:s.name},{iconLayout:s.iconLayout,iconImageHref:s.iconImageHref,iconImageSize:s.iconImageSize,iconImageOffset:s.iconImageOffset});n.events.add("click",function(e){i&&i.options.set("iconImageHref","img/icons/pin-white.svg"),(i=n).options.set("iconImageHref","img/icons/pin-active.svg");var a=document.getElementById("info");a.innerHTML=s.description,a.style.display="block"}),e.geoObjects.add(n)})})}),document.addEventListener("DOMContentLoaded",function(){new Swiper(".stocks__slider",{slidesPerView:"auto",speed:800,spaceBetween:18,loop:!1,breakpoints:{768:{spaceBetween:34}},pagination:{el:".swiper-pagination",clickable:!0}})});