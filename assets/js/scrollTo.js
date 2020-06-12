var vheight = $(window).height();
var vwidth = $(window).width();

// The scroll-up function
function scrollUp() {
    var vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.ceil($(window).scrollTop() / vheight)) * vheight - $(".navbar").height()
    }, 1500, 'easeInOutExpo');
};

// The scroll-down function
function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight - $(".navbar").height()
    }, 1500, 'easeInOutExpo');
};

// Do stuff when document is ready
$(document).ready(function () {
    // Click to Scroll DOWN Functions
    $('.scroll-next').click(function (event) {
        scrollDown();
        event.preventDefault();
    });

    // Click to Scroll UP Functions
    $('.scroll-prev').click(function (event) {
        scrollUp();
        event.preventDefault();
    });

});

