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
            var op=(offset-fadeStart)/(fadeUntil-fadeStart);
            header.removeClass('opaque')
            opacity=op>1?1:op;
            header.css('opacity',opacity);
        }
    });
});

$(document).ready(function(){
    $('#lion_img').on("click",function(){
      $('html, body').animate({scrollTop:0}, 'slow');
    });
    $("body").hide(0).delay(100).fadeIn(2000)

    $('a[href*="#"]').on('click', function (e) {
    	e.preventDefault();

    	$('html, body').animate({
    		scrollTop: $($(this).attr('href')).offset().top
    	}, 500, 'swing');
    });

});

function iframe0(){
    var iframeW = $('iframe').width();
    console.log("###")
    $('iframe').css({
      height: iframeW * 0.5622

    })
  }
  iframe0();

  $(window).resize(function(){
    iframe0();
    
  });