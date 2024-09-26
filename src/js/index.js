'use strict';

/**
  Перемещение к нужному блоку через навигацию
 */

let reproduction = document.querySelectorAll('.reproduction');
let news = document.querySelectorAll('.news');
let team = document.querySelectorAll('.team');
let infoFrance = document.querySelector('.footer__menu-link_france');
let infoGermany = document.querySelector('.footer__menu-link_germany');
let infoEngland = document.querySelector('.footer__menu-link_england');

reproduction.forEach((link) => { // Перемещение к блоку "Репродукции"
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.block-reprodaction').scrollIntoView({ behavior: 'smooth' });
  });
});

news.forEach((link) => { // Перемещение к блоку "Новости"
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.block-news').scrollIntoView({ behavior: 'smooth' });
  });
});

team.forEach((link) => { // Перемещение к блоку "Наша команда"
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.block-team').scrollIntoView({ behavior: 'smooth' });
  });
});

infoFrance.addEventListener('click', (e) => { // Перемещение из футера к блоку Франции
  e.preventDefault();
  document.querySelector('.block-reprodaction').scrollIntoView({ behavior: 'smooth' });
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryFrance.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionFrance.classList.add('section__body_active');
  itemHandler(0);
});

infoGermany.addEventListener('click', (e) => { // Перемещение из футера к блоку Германии
  e.preventDefault();
  document.querySelector('.block-reprodaction').scrollIntoView({ behavior: 'smooth' });
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryGermany.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionGermany.classList.add('section__body_active');
  itemHandler(0);
});

infoEngland.addEventListener('click', (e) => { // Перемещение из футера к блоку Англии
  e.preventDefault();
  document.querySelector('.block-reprodaction').scrollIntoView({ behavior: 'smooth' });
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryEngland.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionEngland.classList.add('section__body_active');
  itemHandler(0);
});

/**
  Popup "Заказать СВОЮ картину"
 */

let popupBg = document.querySelector('.popup-bg'); // "Заказать СВОЮ картину"
let openPopup = document.querySelector('.hero__button');
let closePopup = document.querySelectorAll('.popup-card__close');
let popupOverlay = document.querySelector('.popup-overlay'); // "Заказать картину"
let openPopupButtons = document.querySelectorAll('.service-card__button');

let infoPopup = document.querySelector('.popup-card__info');
let pictures = document.querySelectorAll('.service-card__img');
let names = document.querySelectorAll('.service-card__name');
let picture = document.querySelectorAll('.service-card__title');

openPopup.addEventListener('click', (e) => { // открытие popup "Заказать СВОЮ картину"
  e.preventDefault();
  popupBg.classList.add('active');
});

closePopup.forEach((el) => {
  el.addEventListener('click', (e) => { // закрытие popup "Заказать картину" и "Заказать СВОЮ картину" через крестик
    e.preventDefault();
    popupBg.classList.remove('active');
    popupOverlay.classList.remove('active');
  });
});

document.addEventListener('click', (e) => { // закрытие popup "Заказать картину" и "Заказать СВОЮ кратину" через фон 
  if (e.target === popupOverlay || e.target === popupBg) {
    popupOverlay.classList.remove('active');
    popupBg.classList.remove('active');
  }
});

/**
  Popup "Заказать картину"
 */

openPopupButtons.forEach((button, index) => { // открытие popup "Заказать картину"
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupOverlay.classList.add('active');
    infoPopup.insertAdjacentHTML('afterbegin',
      `<img class="popup-card__image" src=${pictures[index].getAttribute('src')} style=" width: 100%; aspect-ratio: 5/2; object-fit: contain;">
         <div class="popup-card__autor">${names[index].textContent}</div>
         <div class="popup-card__picture">${picture[index].textContent}</div>`);
  });
});

/**
  Выбор страны художника
 */

let countryFrance = document.querySelector('.section__country_france'); // кнопка, отвечающая за выбор страны
let countryGermany = document.querySelector('.section__country_germany');
let countryEngland = document.querySelector('.section__country_england');
let sectionFrance = document.querySelector('.section__body_france'); // секция выбранной страны
let sectionGermany = document.querySelector('.section__body_germany');
let sectionEngland = document.querySelector('.section__body_england');

let countySelected = document.querySelector('.section__button_active'); // активня кнопка
let countryBtn = Array.from(document.querySelectorAll('.section__button'));
let sectionSelected = document.querySelector('.section__body_active'); // активная секция
let sections = Array.from(document.querySelectorAll('.section__body'));

countryFrance.onclick = function (e) { // Франция
  e.preventDefault();
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryFrance.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionFrance.classList.add('section__body_active');
  itemHandler(0);
}

countryGermany.onclick = function (e) { // Германия
  e.preventDefault();
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryGermany.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionGermany.classList.add('section__body_active');
  itemHandler(0);
}

countryEngland.onclick = function (e) { // Англия
  e.preventDefault();
  countryBtn.forEach(el => {
    el.blur();
    el.classList.remove('section__button_active');
  });
  countryEngland.classList.add('section__button_active');
  sections.forEach(el => {
    el.classList.remove('section__body_active');
  });
  sectionEngland.classList.add('section__body_active');
  itemHandler(0);
}

/**
  Слайдер
 */

let items = document.querySelectorAll('.services__item');
let pictureFrance = document.querySelectorAll('.section__body_france .services__item'); // все картины Франции
let pictureGermany = document.querySelectorAll('.section__body_germany .services__item'); // все картины Германии
let pictureEngland = document.querySelectorAll('.section__body_england .services__item'); // все картины Англии

let firstButton = document.querySelector('.slider__button_first'); // кнопки переключения слайдов
let first = document.querySelector('.first');
let secondButton = document.querySelector('.slider__button_second');
let second = document.querySelector('.second');
let thirdButton = document.querySelector('.slider__button_third');
let third = document.querySelector('.third');
let fourthButton = document.querySelector('.slider__button_fourth');
let fifthButton = document.querySelector('.slider__button_fifth');
let sixthButton = document.querySelector('.slider__button_sixth');
let sliderBtnMobile = document.querySelectorAll('.slider__button'); // индикатор на мобил. версии
let sliderBtnTablet = document.querySelectorAll('.slider__button_tablet');  // индикатор на планш. версии

function itemHandler(currentIndex) { // функция, показывающая нужные изображения
  if (window.innerWidth < 509) { // мобильная версия
    sliderBtnMobile.forEach((e) => {
      e.classList.remove('active');
      if (sliderBtnMobile[currentIndex].classList.contains('slider__button_first')) {
        firstButton.classList.add('active');
      } else if (sliderBtnMobile[currentIndex].classList.contains('slider__button_second')) {
        secondButton.classList.add('active');
      } else if (sliderBtnMobile[currentIndex].classList.contains('slider__button_third')) {
        thirdButton.classList.add('active');
      } else if (sliderBtnMobile[currentIndex].classList.contains('slider__button_fourth')) {
        fourthButton.classList.add('active');
      } else if (sliderBtnMobile[currentIndex].classList.contains('slider__button_fifth')) {
        fifthButton.classList.add('active');
      } else {
        sixthButton.classList.add('active');
      }
    });
    items.forEach((el) => {
      if (el.classList.contains('france')) {
        el.classList.remove('active-mobile');
        items[currentIndex].classList.add('active-mobile');
      } else if (el.classList.contains('germany')) {
        el.classList.remove('active-mobile');
        items[currentIndex + pictureFrance.length].classList.add('active-mobile');
      } else {
        el.classList.remove('active-mobile');
        items[currentIndex + (pictureFrance.length + pictureGermany.length)].classList.add('active-mobile');
      }
    });
  } else { // планшетная версия
    sliderBtnTablet.forEach((e) => {
      e.classList.remove('active');
      if (sliderBtnTablet[currentIndex].classList.contains('first')) {
        first.classList.add('active');
      } else if (sliderBtnTablet[currentIndex].classList.contains('second')) {
        second.classList.add('active');
      } else {
        third.classList.add('active');
      }
    });
    items.forEach((el) => {
      if (el.classList.contains('france')) {
        el.classList.remove('active-tablet');
        items[currentIndex].classList.add('active-tablet');
        items[currentIndex + 1].classList.add('active-tablet');
      } else if (el.classList.contains('germany')) {
        el.classList.remove('active-tablet');
        items[currentIndex + pictureFrance.length].classList.add('active-tablet');
        items[currentIndex + pictureFrance.length + 1].classList.add('active-tablet');
      } else {
        el.classList.remove('active-tablet');
        items[currentIndex + (pictureFrance.length + pictureGermany.length)].classList.add('active-tablet');
        items[currentIndex + (pictureFrance.length + pictureGermany.length) + 1].classList.add('active-tablet');
      }
    });
  }
}

/**
  Отображение загруженного изображения
 */

  function previewImage(file) {
    const reader = new FileReader();
    reader.onload = () => document.getElementById('preview').src = reader.result;
    reader.readAsDataURL(file);
  }