$(document).ready(function(){
    $('#menu-toggler').on('click', function(){
        $('#ham').toggleClass('cross');
        $('#menu').toggleClass('menu-off');
        $('#top-head-nav').toggleClass('top-head-nav-active');

        $('#chevron').removeClass('chevron-rotated');
        $('#about-block').removeClass('about-block-active');
    });
    $('#menu-toggler-mobile').on('click', function(){
        $('#sidebar').toggleClass('sidebar-active');
        $('#ham-mobile').toggleClass('cross');
        $('#content').toggleClass('content-active');
        $('#main-content').toggleClass('main-content-active');

        $('#chevron').removeClass('chevron-rotated');
    });
    $('#info-toggler').on('click', function(){
        $('#chevron').toggleClass('chevron-rotated');
        $('#about-block').toggleClass('about-block-active');
        $('#top-head-nav').toggleClass('top-head-nav-active');

        $('#ham').removeClass('cross');
        $('#menu').removeClass('menu-off');
    });

    var offset = 250;
    var duration = 750;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('#scrolltop-btn').fadeIn(duration);
        }
        else{
             $('#scrolltop-btn').fadeOut(duration);
        }
    });

     $('#scrolltop-btn').on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, duration);
    });
})