// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)



// Swiper
const swiper = new Swiper('.swiper', {
  // Navigation arrows
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.slider-scrollbar',
  },


  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});

// var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// mapTitle.textContent = 'Для активации карты нажмите по ней';
// wrapMap.appendChild(mapTitle);
// wrapMap.onclick = function () {
//   this.children[0].removeAttribute('style');
//   mapTitle.parentElement.removeChild(mapTitle);
// }
// wrapMap.onmousemove = function (event) {
//   mapTitle.style.display = 'block';
//   if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
//   if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
// }
// wrapMap.onmouseleave = function () {
//   mapTitle.style.display = 'none';
// }

// document.querySelector(".pointer-events-none").addEventListener("click", function() {
//   document.documentElement.classList.toggle(".pointer-events-auto");
// });
