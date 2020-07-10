
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

