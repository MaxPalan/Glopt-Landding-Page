// Demo Slider
let btnLeft = document.querySelector('#btnLeft');
let btnRight = document.querySelector('#btnRight');

let mainIcon = document.querySelector('#mainIcon');
let leftIcon = document.querySelector('#leftIcon');
let rightIcon = document.querySelector('#rightIcon');

let mainText = document.querySelector('#mainText');
let leftText = document.querySelector('#leftText');
let rightText = document.querySelector('#rightText');

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

function moveLeft() {
    if (mainIcon.classList[1] == 'main') {
        mainIcon.classList.remove('main');
        mainIcon.classList.add('left');
        mainText.classList.remove('main__text');
        mainText.classList.add('left__text');
    }
    else if (mainIcon.classList[1] == 'left') {
        mainIcon.classList.remove('left');
        mainIcon.classList.add('main');
        mainText.classList.remove('left__text');
        mainText.classList.add('main__text');
    }
    if (leftIcon.classList[1] == 'left') {
        leftIcon.classList.remove('left');
        leftIcon.classList.add('main');
        leftText.classList.remove('left__text');
        leftText.classList.add('main__text');
    }
    else if (leftIcon.classList[1] == 'main') {
        leftIcon.classList.remove('main');
        leftIcon.classList.add('left');
        leftText.classList.remove('main__text');
        leftText.classList.add('left__text');
    }
    if (rightIcon.classList[1] == 'main') {
        rightIcon.classList.remove('main');
        rightIcon.classList.add('left');
        rightText.classList.remove('main__text');
        rightText.classList.add('left__text');
    }
    else if (rightIcon.classList[1] == 'left') {
        rightIcon.classList.remove('left');
        rightIcon.classList.add('main');
        rightText.classList.remove('left__text');
        rightText.classList.add('main__text');
    }
}

function moveRight() {
    if (mainIcon.classList[1] == 'main') {
        mainIcon.classList.remove('main');
        mainIcon.classList.add('right');
        mainText.classList.remove('main__text');
        mainText.classList.add('right__text');
    }
    else if (mainIcon.classList[1] == 'right') {
        mainIcon.classList.remove('right');
        mainIcon.classList.add('main');
        mainText.classList.remove('right__text');
        mainText.classList.add('main__text');
    }
    if (rightIcon.classList[1] == 'right') {
        rightIcon.classList.remove('right');
        rightIcon.classList.add('main');
        rightText.classList.remove('right__text');
        rightText.classList.add('main__text');
    }
    else if (rightIcon.classList[1] == 'main') {
        rightIcon.classList.remove('main');
        rightIcon.classList.add('right');
        rightText.classList.remove('main__text');
        rightText.classList.add('right__text');
    }
    if (leftIcon.classList[1] == 'main') {
        leftIcon.classList.remove('main');
        leftIcon.classList.add('right');
        leftText.classList.remove('main__text');
        leftText.classList.add('right__text');
    }
    else if (leftIcon.classList[1] == 'right') {
        leftIcon.classList.remove('right');
        leftIcon.classList.add('main');
        leftText.classList.remove('right__text');
        leftText.classList.add('main__text');
    }
}

// Burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click', listOpac);

function listOpac() {
    burger.classList.toggle('close');
    menu.classList.toggle('visible');
}

// Smooth scroll 
let menuLinks = document.querySelectorAll('.header__menu-link');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        let menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            let goToBlock = document.querySelector(menuLink.dataset.goto);
            let goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
            listOpac();
        }
    }
}

// Page up
let arrow = document.querySelector('.pageup');

arrow.addEventListener('click', pageUp);

function pageUp(e) {
    let goTop = document.querySelector(arrow.dataset.goto);
    let goToTop = goTop.getBoundingClientRect().top + pageYOffset;
    window.scrollTo({
        top: goToTop,
        behavior: "smooth"
    });
    e.preventDefault();
    listOpac;
}

window.addEventListener('scroll', () => {
    document.documentElement.scrollTop > 1270 ? arrow.classList.add('fadeIn') : arrow.classList.remove('fadeIn');
})