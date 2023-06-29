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

// аккордеон
// Получаем список элементов аккордеона
const accordionItems = document.querySelectorAll('.faq__item');

// Добавляем обработчик события клика на каждый элемент аккордеона
accordionItems.forEach((item) => {
  const heading = item.querySelector('.faq__heading');
  heading.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)

    // Проверяем, если текущая вкладка уже открыта, то закрываем её
    const isOpen = item.classList.contains('faq__item--opened');
    if (!isOpen) {
      const openItem = document.querySelector('.faq__item--opened');
      if (openItem) {
        openItem.classList.remove('faq__item--opened');
        openItem.classList.add('faq__item--closed');
      }
    }

    // Переключаем классы для открытия/закрытия аккордеона
    item.classList.toggle('faq__item--opened');
    item.classList.toggle('faq__item--closed');
  });
});

// плавный выезд меню


// табы в блоке "Как мы работаем"
let orderSection = document.querySelector('.order');
let orderButtonNumber = orderSection.querySelectorAll('.order__number');
let orderImage = orderSection.querySelectorAll('.order__picture');
let orderText = orderSection.querySelectorAll('.order__text');

orderButtonNumber.forEach((el) => {
  el.addEventListener('click', function (evt) {
   let tabNumber = evt.target.getAttribute('data-tab');

   orderButtonNumber.forEach((el) => el.classList.remove('order__number--active'));

   evt.target.classList.add('order__number--active');

   // скрываем всё содержимое (текст и картинку)
   orderImage.forEach((el) => el.classList.add('hidden'));
   orderText.forEach((el) => el.classList.add('hidden'));

   // показываем выбранный текст и картинку
   let selectedText = orderSection.querySelector('.order__text--order--' + tabNumber);
   selectedText.classList.remove('hidden');

   let selectedImage = orderSection.querySelector('.order__picture--order--' + tabNumber);
   selectedImage.classList.remove('hidden');
  })
})

// слайдер в блоке Hero
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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

