// Блок товары в наличии \ карусель
let carousel = new Swiper('.relationship-slider', {
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 60,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        1100: {
            slidesPerView: 3
        }
    }
});

carousel.on('slideChange', () => {
    scrollData.update({
        from: carousel.activeIndex
    });
});

let scroll = $(".sc").ionRangeSlider({
    skin: "round",
    max: carousel.slides.length - 3,
    min: 0,
    from: 0,
    hide_min_max: true,
    hide_from_to: true,
    onFinish: function (item) {
        carousel.slideTo(item.from);
    }
});
let scrollData = scroll.data("ionRangeSlider");


// Minimal price
$('.info-sale__low').on('click', () => {
   $('#specialPrice').removeClass('d-none');
});

// One click
$('.info-sale__fast').on('click', () => {
    $('#oneClick').removeClass('d-none');
});