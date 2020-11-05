// burger menu handler
(function () {
    const burger = document.querySelector('.burger__navigation');
    const burgerOpen = document.querySelector('.menu__burger-open__icon');
    const burgerClose = document.querySelector('.menu__burger-close__icon');
    const burgerLinks = document.querySelectorAll('.burger__link');

    burgerOpen.addEventListener('click', () => {
        burger.classList.remove('hidden');
    })
    burgerClose.addEventListener('click', () => {
        burger.classList.add('hidden');
    });

    // if (window.innerWidth < 768) {
    for (let i = 0; i < burgerLinks.length; i += 1) {
        burgerLinks[i].addEventListener('click', () => {
            burger.classList.add('hidden');
        });
    };
}());

// burger open submenu
const burgerLink = document.querySelectorAll('.burger__item');
const burgerSubmenu = document.querySelectorAll('.burger__submenu');
const arrowOpen = document.querySelectorAll('.burger__navigation .keyboard_arrow_down__icon');
const arrowClose = document.querySelectorAll('.burger__navigation .keyboard_arrow_up__icon');

for (let i = 0; i < burgerLink.length; i++) {
    burgerLink[i].addEventListener('click', function() {
        burgerLink[i].classList.toggle('opened');
        arrowOpen[i - 2].classList.toggle('hidden');
        arrowClose[i - 2].classList.toggle('hidden');
        burgerSubmenu[i - 2].classList.toggle('hidden');
    });
}