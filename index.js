var main=['UOS ','LIKELION']
console.log('hi')
$(main).hide().appendTo('#main-text').each(function(i) {
    $(this).delay(1000 * i).fadeIn();
});

$(function () {
    var header = $('#menu-bar');
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('opaque').addClass('fixed-top').fadeIn();
        } else {
            header.removeClass('navbar-fixed-top').fadeOut().addClass('opaque');
        }
    });
});

$(document).ready(function(){
    $("body").hide(0).delay(100).fadeIn(2000)

    $('a[href*="#"]').on('click', function (e) {
    	e.preventDefault();

    	$('html, body').animate({
    		scrollTop: $($(this).attr('href')).offset().top
    	}, 500, 'swing');
    });

});
