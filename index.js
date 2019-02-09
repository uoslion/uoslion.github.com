$(function () {

    $(window).scroll(function () {
        var offset = $(window).scrollTop(),opacity=0;
        var header = $('#menu-bar');
        var fadeStart=300,fadeUntil=700;
        if( offset<=fadeStart ){
            opacity=0;
            header.addClass('opaque')
            header.css('opacity',opacity);
        }else if( offset<=fadeUntil ){
            header.removeClass('opaque')
            opacity=(offset-fadeStart)/(fadeUntil-fadeStart);
            header.css('opacity',opacity);
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
