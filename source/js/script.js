// Открытие меню
let menuToggle = document.querySelector('.menu__toggle');
let menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('menu--status--closed')) {
    menu.classList.remove('menu--status--closed');
    menu.classList.add('menu--status--opened');
  } else {
    menu.classList.add('menu--status--closed');
    menu.classList.remove('menu--status--opened');
  }
}
)

// открытие окна поиска
let searchOpenButton = document.querySelector('.search__open-button');
let searchCloseButton = document.querySelector('.search__close-button');
let searchForm = document.querySelector('.search__form');

searchOpenButton.addEventListener('click', function () {
  searchForm.classList.remove('hidden');
}
)

searchCloseButton.addEventListener('click', function () {
  searchForm.classList.add('hidden');
}
)

// слайдер в блоке Hero
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // bulletClass: '.hero__slider-dot',
    // bulletActiveClass: '.hero__slider-dot--active',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
