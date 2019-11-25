jQuery(document).ready(function () {

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) {
            $(".js-transparent").removeClass("transparent");
            $(".main-navigation, .main-navigation-logo .main-navigation-logo-img").addClass("reduce-height");
        } else {
            $(".js-transparent").addClass("transparent");
            $(".main-navigation, .main-navigation-logo .main-navigation-logo-img").removeClass("reduce-height");
        }
    });
    
    var tl, position = 0;
    tl = new TimelineMax({paused: true});
    tl.to($('.all-menu'), 0.1, {autoAlpha: 1});
    tl.set($('.all-menu a'), {x: 20});
    //.staggerTo($('.all-menu a'), 0.3, {autoAlpha:1, x:'+=-60px', ease: Back.easeOut}, 0.1)

    $(".all-menu a").each(function (index, element) {
        position = (index == 0) ? -35 : position - 55;
        tl.to($('#menu-btnx'),0.1, {className:"+=active"});
        tl.add(TweenMax.fromTo(element, 0.5, {autoAlpha: 0, x: 20}, {autoAlpha: 1, x: position, ease: Back.easeOut}), 0.2);
    });

    $(document).on('click', '.desktop #menu-btnx', function () {
        console.log('SOMAN DESKTOP');
        tl.reversed() ? tl.play() : tl.reverse();
        if (!$('.all-menu').hasClass('menu-circle-active')) {
            $('.all-menu').addClass('menu-circle-active');
            tl.play();
        } else {
            $('.all-menu').removeClass('menu-circle-active');
        }
    })
    
    $(document).on('touchend click', '.mobile .menu-link', function(e){
        e.preventDefault();
        $(this).addClass('active');
        var url = location.protocol + '//' + location.host + $(this).attr('href');
        setTimeout(function(){
            document.location.href = url;
        }, 1500);
    });

    var tl2, position = 0, firstime = true;
    tl2 = new TimelineMax({paused: true});
//    TweenMax.set($('.mmmenu'), {display: 'none'});
    tl2.to($('body'),0.1, {className:"+=opened"});
    tl2.fromTo($('.mmmenu'), 0.1, {display: 'none'}, {display: 'block'});
    tl2.to($('.mmmenu'), 0.5, {height: '100%'});
    tl2.set(".main-menu li", {y: -100});
    tl2.staggerTo(".main-menu li", 0.3, {opacity: 1, y: 0, ease: Back.easeOut}, 0.01);
    
    $(document).on('touchend', '.mobile #menu-btnx', function () {
        console.log('SOMAN ' + tl2.reversed());
        if (firstime){
            tl2.reverse();
            firstime = false;
        }
        tl2.reversed() ? tl2.play() : tl2.reverse();
    })

    var body = $('body'),
            _window = $(window);

    function onResizeARIA() {
        console.log('resize check');
        if (_window.width() > 992) {
            if (!body.hasClass('desktop'))
                body.addClass('desktop');
            if (body.hasClass('mobile'))
                body.removeClass('mobile');
        } else {
            if (!body.hasClass('mobile'))
                body.addClass('mobile');
            if (body.hasClass('desktop'))
                body.removeClass('desktop');
        }
    }

    _window
            .on('load.raxo', onResizeARIA)
            .on('resize.raxo', function () {
                onResizeARIA();
            });


});