// Поиск

const activeSearch = 'search-show';
const hideBlock = '.main-hidden';
const searchBtn = '.main__search-btn';
const formClose = '.form-close';
const mobSearch = '.main__search-mob';

$(mobSearch).on('click', () => {
    $('#search').addClass(activeSearch);
});

$(searchBtn).on('click', () => {
    $(hideBlock).css('opacity', 0);
    $('#search').addClass(activeSearch);
});
$(formClose).on('click', () => {
    $(hideBlock).css('opacity', 1);
    $('#search').removeClass(activeSearch);
});

// Миникорзина
const cartBtn = $('.main__cart-button');
const miniCart = $('.main__cartContent');
const closeCart = $('.cartContent__close-btn');

cartBtn.on('click', () => {
    miniCart.removeClass('d-none');
});
closeCart.on('click', () => {
    miniCart.addClass('d-none');
});

// Мобильное меню
const mobMenu = $('.mob-menu');
const mobBtn = $('.main__menu-mob-btn');
const mobClose = $('.mob-menu__close-btn');

mobBtn.on('click', () => {
    mobMenu.addClass('mob-menu__active');
});

mobClose.on('click', () => {
    mobMenu.removeClass('mob-menu__active');
});

// Scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.up').css('opacity', 1);
    } else {
        $('.up').css('opacity', 0);
    }
});
$('.up').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});
$('.cat-mob').on('click', () => {

    $('.catalogue__menu').addClass('show-catalog');

});
$('.close-btn').on('click', () => {
    $('.catalogue__menu').removeClass('show-catalog');
});