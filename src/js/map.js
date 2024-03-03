document.addEventListener('DOMContentLoaded', function () {

  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map('map', {
      center: [55.755831, 37.617673],
      zoom: 10
    });


    let markers = [
      {
        name: 'Ховрино', coordinates: [55.869, 37.486], description:

          `
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
        `
        ,
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/pin-white.svg',
        iconImageSize: [68, 68],

      },
      {
        name: 'Мытищи', coordinates: [55.911, 37.733], description:
          `
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
        `
        ,
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/pin-white.svg',
        iconImageSize: [68, 68],
      },
      {
        name: 'Красногорск', coordinates: [55.831178, 37.329729], description:

          `
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
      `,
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/pin-white.svg',
        iconImageSize: [68, 68],
      },
      {
        name: 'Москва', coordinates: [55.755831, 37.617673], description:

          `
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
      `,
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/pin-white.svg',
        iconImageSize: [68, 68],

      }
    ];

    let activePlacemark = null;


    markers.forEach(function (marker) {
      let placemark = new ymaps.Placemark(
        marker.coordinates,
        {
          hintContent: marker.name,
        },
        {

          iconLayout: marker.iconLayout,
          iconImageHref: marker.iconImageHref,
          iconImageSize: marker.iconImageSize,
          iconImageOffset: marker.iconImageOffset
        }
      );


      placemark.events.add('click', function (e) {

        if (activePlacemark) {

          activePlacemark.options.set('iconImageHref', '../img/icons/pin-white.svg');
        }

        activePlacemark = placemark;

        placemark.options.set('iconImageHref', '../img/icons/pin-active.svg');


        let infoBlock = document.getElementById('info');
        infoBlock.innerHTML = marker.description;
        infoBlock.style.display = 'block';
      });

      myMap.geoObjects.add(placemark);
    });
  }

});