const home = $('.main__bg-img');
const topMap = $('.home-top');
const centerMap = $('.home-center');
const bottomMap = $('.home-bottom');
const topImg = $('.hover-top');
const centerImg = $('.hover-center');
const bottomImg = $('.hover-bottom');
const mapLayer = $('.homeMap');
const imgLayer = $('.main-hover');
const main = $('.main');


// Сброс наведения
mapLayer.on('mouseout', () => {
    imgLayer.css('opacity', 0);
    home.css('opacity', 1);
    main.removeClass('main-white');
});

// Hover on top home
topMap.on('mouseover', () => {
   topImg.css('opacity', 1);
   home.css('opacity', 0);
   main.addClass('main-white');
});

// Hover on middle home
centerMap.on('mouseover', () => {
   centerImg.css('opacity', 1);
   home.css('opacity', 0);
    main.addClass('main-white');
});

// Hover on bottom home
bottomMap.on('mouseover', () => {
   bottomImg.css('opacity', 1);
   home.css('opacity', 0);
   main.addClass('main-white');
});