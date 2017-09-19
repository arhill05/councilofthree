document.querySelector('#down-arrow').onclick = function () {
    $('html, body').animate({
        scrollTop: $('#content').offset().top
    }, 1000);
}