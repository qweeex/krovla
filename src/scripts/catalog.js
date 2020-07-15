
function changeHeader() {

    if (window.screen.width <= 600) {
        $('.main-catalog').addClass('main-minimal');
    } else {
        $('.main-catalog').removeClass('main-minimal');
    }
}
changeHeader();
//window.on('resize', changeHeader());
