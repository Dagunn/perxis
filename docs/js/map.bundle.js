document.addEventListener("DOMContentLoaded",(function(){ymaps.ready((function(){let n=new ymaps.Map("map",{center:[55.755831,37.617673],zoom:10}),a=null;[{name:"Ховрино",coordinates:[55.869,37.486],description:'\n          <h3 class="map-info__title">Dealer Company Name</h3>\n          <p class="map-info__address">Ховрино, ул. Автодилерская, 23, стр. 1</p>\n          <div class="flex align-center map-info__contacts">\n            <div class="map-info__contacts-left">\n              <p class="map-info__sells">Продажи:</p>\n              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>\n              <span class="map-info__work">пн-пт: 09:00-21:00,</span>\n              <span class="map-info__work">сб, вс: 10:00-20:00</span>\n            </div>\n            <div class="map-info__contacts-right">\n              <p class="map-info__service">Cервис:</p>\n              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>\n              <span class="map-info__work">пн-сб: 08:00-22:00,</span>\n              <span class="map-info__work">вс: 09:00-21:00</span>\n            </div>\n          </div>\n          <button class="btn map-info__btn flex align-center">\n          Задать вопрос\n\n          <svg class="icon" width="15" height="15">\n            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>\n          </svg>\n        </button>\n        ',iconLayout:"default#image",iconImageHref:"../img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Мытищи",coordinates:[55.911,37.733],description:'\n          <h3 class="map-info__title">Dealer Company Name</h3>\n          <p class="map-info__address">Мытищи, ул. Автодилерская, 23, стр. 1</p>\n          <div class="flex align-center map-info__contacts">\n            <div class="map-info__contacts-left">\n              <p class="map-info__sells">Продажи:</p>\n              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>\n              <span class="map-info__work">пн-пт: 09:00-21:00,</span>\n              <span class="map-info__work">сб, вс: 10:00-20:00</span>\n            </div>\n            <div class="map-info__contacts-right">\n              <p class="map-info__service">Cервис:</p>\n              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>\n              <span class="map-info__work">пн-сб: 08:00-22:00,</span>\n              <span class="map-info__work">вс: 09:00-21:00</span>\n            </div>\n          </div>\n          <button class="btn map-info__btn flex align-center">\n          Задать вопрос\n\n          <svg class="icon" width="15" height="15">\n            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>\n          </svg>\n        </button>\n        ',iconLayout:"default#image",iconImageHref:"../img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Красногорск",coordinates:[55.831178,37.329729],description:'\n          <h3 class="map-info__title">Dealer Company Name</h3>\n          <p class="map-info__address">Красногорск, ул. Автодилерская, 23, стр. 1</p>\n          <div class="flex align-center map-info__contacts">\n            <div class="map-info__contacts-left">\n              <p class="map-info__sells">Продажи:</p>\n              <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>\n              <span class="map-info__work">пн-пт: 09:00-21:00,</span>\n              <span class="map-info__work">сб, вс: 10:00-20:00</span>\n            </div>\n            <div class="map-info__contacts-right">\n              <p class="map-info__service">Cервис:</p>\n              <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>\n              <span class="map-info__work">пн-сб: 08:00-22:00,</span>\n              <span class="map-info__work">вс: 09:00-21:00</span>\n            </div>\n          </div>\n          <button class="btn map-info__btn flex align-center">\n          Задать вопрос\n\n          <svg class="icon" width="15" height="15">\n            <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>\n          </svg>\n        </button>\n      ',iconLayout:"default#image",iconImageHref:"../img/icons/pin-white.svg",iconImageSize:[68,68]},{name:"Москва",coordinates:[55.755831,37.617673],description:'\n        <h3 class="map-info__title">Dealer Company Name</h3>\n        <p class="map-info__address">Москва, ул. Автодилерская, 23, стр. 1</p>\n        <div class="flex align-center map-info__contacts">\n          <div class="map-info__contacts-left">\n            <p class="map-info__sells">Продажи:</p>\n            <a class="map-info__tel" href="tel:+74954281294">+7 (495) 428 12 94</a>\n            <span class="map-info__work">пн-пт: 09:00-21:00,</span>\n            <span class="map-info__work">сб, вс: 10:00-20:00</span>\n          </div>\n          <div class="map-info__contacts-right">\n            <p class="map-info__service">Cервис:</p>\n            <a class="map-info__tel" href="tel:+74954281295">+7 (495) 428 12 95</a>\n            <span class="map-info__work">пн-сб: 08:00-22:00,</span>\n            <span class="map-info__work">вс: 09:00-21:00</span>\n          </div>\n        </div>\n        <button class="btn map-info__btn flex align-center">\n        Задать вопрос\n\n        <svg class="icon" width="15" height="15">\n          <use xlink:href="img/sprite-svg/icons.svg#icon-phone"></use>\n        </svg>\n      </button>\n      ',iconLayout:"default#image",iconImageHref:"../img/icons/pin-white.svg",iconImageSize:[68,68]}].forEach((function(s){let i=new ymaps.Placemark(s.coordinates,{hintContent:s.name},{iconLayout:s.iconLayout,iconImageHref:s.iconImageHref,iconImageSize:s.iconImageSize,iconImageOffset:s.iconImageOffset});i.events.add("click",(function(n){a&&a.options.set("iconImageHref","../img/icons/pin-white.svg"),a=i,i.options.set("iconImageHref","../img/icons/pin-active.svg");let e=document.getElementById("info");e.innerHTML=s.description,e.style.display="block"})),n.geoObjects.add(i)}))}))}));