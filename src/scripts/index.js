
// Блок товары в наличии
const slideTop = $('.slide-top__back');
const slideBottom = $('.slide-bottom__back');

function setSize() {
    let width = document.querySelector('.availability .container').offsetLeft;
    slideTop.css('width', width + 'px')
        .css('left', '-'+width+'px');
    slideBottom.css('width', width + 'px')
        .css('left', '-'+width+'px');
}
setSize();
window.addEventListener('resize', setSize);


// Блок категории
const btnMore = $('.moreMenu');
btnMore.on('click', (e) => {
    let id = e.target.dataset.menu;
    if (e.target.classList.contains('moreActive')){
        $('ul[data-menu="'+id+'"]').css('height', '373px');
        e.target.classList.remove('moreActive');
    } else {
        $('ul[data-menu="'+id+'"]').css('height', 'auto');
        e.target.classList.add('moreActive');
    }
});


// Блок товары в наличии \ карусель
let carousel = new Swiper('.availability-swiper', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 25,
});

carousel.on('slideChange', () => {
    scrollData.update({
       from: carousel.activeIndex
   });
});

let scroll = $(".scrollbar").ionRangeSlider({
    skin: "round",
    max: carousel.slides.length / (carousel.params.slidesPerView + carousel.params.slidesPerColumn),
    min: 0,
    from: 0,
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (item) {
        carousel.slideTo(item.from);
    }
});
let scrollData = scroll.data("ionRangeSlider");

// Блок товары в наличии \ акция
let sale = new Swiper('.swiper-aval', {
    effect: 'fade'
});

$('.arrows-right').on('click', () => {
   sale.slideNext();
});
$('.arrows-left').on('click', () => {
    sale.slidePrev();
});

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


// Табы на мобилке
const tab = $('.cat-mob-link');

tab.on('click', (e) => {
    e.preventDefault();
    let block = e.target.dataset.href;
    tab.removeClass('link-show');
    e.target.classList.add('link-show');
    $('.catalog__col').removeClass('catalog__active');
    $('.catalog__col[data-block="'+block+'"]').addClass('catalog__active');
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
