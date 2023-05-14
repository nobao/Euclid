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
