/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {

    if ($(window).width() > 992) {

        Scrollbar.use(ScaleDeltaPlugin);
        Scrollbar.init(document.getElementById('smoothies'), {friction: 10});

        var scrollbar = Scrollbar.get(document.getElementById('smoothies'));
        var logico = true;
        
        //console.log('sp1'+$('.sp1').position().left)
        TweenMax.set($('.slide__image_lineal.two'),{ x: '100%', y: '70%' });

        var direction;
        window.addEventListener('wheel', function(e) {
            if (e.deltaY < 0) {
              //console.log('scrolling up');
              direction = 'left';
            }
            if (e.deltaY > 0) {
              //console.log('scrolling down');
              direction = 'right';
            }
          });

        // equivalent in 8.x
        scrollbar.addListener(() => {
            requestAnimationFrame(() => {
                var delta = ((scrollbar.offset.x * 100 / scrollbar.limit.x) / 100).toFixed(2);
                var n = scrollbar.offset,
                        r = scrollbar.limit;
                //console.log('delta='+scrollbar.offset.y);
                //console.info(scrollbar);
                var x = $('.sp1').position().left * (delta > 0 ? -delta : delta);
                //console.log('deltaxx='+x );

                var tobutton = $('#canvas').width() - window.innerWidth;
                
                if ( scrollbar.offset.x >= tobutton ){
                    $('#menu-btnx .cls-x').css({ stroke: "#000000" });
                    $('.all-menu span').css('color', '#000');
                    $('#menu-btnx').removeClass('change');    
                }else{
                    $('#menu-btnx .cls-x').css({ stroke: "#ffffff" });
                    $('.all-menu span').css('color', '#fff');
                    if (!$('#menu-btnx').hasClass('change')) {
                        $('#menu-btnx').addClass('change');
                    }
                }
                
                //console.log('sss'+scrollbar.offset.x+"  "+$('#canvas').width() + 'AJA:'+($('#canvas').width() - scrollbar.offset.x));
                if ( (scrollbar.offset.x >= $('#canvas').width() - 100) && logico ) {
                    
                    if (!$(".main-navigation-logo-img img").hasClass('paso') && direction == 'right'){
                        $(".main-navigation-logo-img img").addClass('paso');
                        $(".main-navigation-logo-img img").fadeOut(function() {
                            $(this).attr("src","assets/img/raxo-logo-black.svg").fadeIn(100);
                        });
                        $(".main-navigation-logo-img img").removeClass('paso2');
                    }
                    
                    logico=false;
                }else if (!logico && direction == 'left' && ( scrollbar.offset.x <= $('#canvas').width() +20 ) ){
                    
                    if (!$(".main-navigation-logo-img img").hasClass('paso2')){
                        $(".main-navigation-logo-img img").fadeOut(function() {
                            $(this).attr("src","assets/img/raxo-logo.svg").fadeIn(100);
                        });
                        $(".main-navigation-logo-img img").addClass('paso2');
                    }
                    if (direction == 'left'){
                        $(".main-navigation-logo-img img").removeClass('paso');
                    }
                    logico=true;
                }
                //console.log('tobutton='+tobutton+' scrollbar.offset.x=' + scrollbar.offset.x);
                //console.log('window.innerWidth='+window.innerWidth + ' slide='+ $('#canvas').width()+ '  scrollbar.offset'+(scrollbar.offset.x) + ' delta='+ delta);

                TweenMax.to($('.sp1'), 0.5, {x: $('.sp1').position().left * (delta > 0 ? -delta * 1.3 : delta) })
                TweenMax.to($('.sp2'), 0.5, {x: ($('.sp2').position().left * (delta > 0 ? -delta : delta )) * 0.8})
                TweenMax.to($('.sp3'), 0.5, {x: ($('.sp3').position().left * (delta > 0 ? -delta : delta )) * 0.5})
                TweenMax.to($('.sp4'), 0.5, {x: ($('.sp4').position().left * (delta > 0 ? (scrollbar.offset.x > (window.innerWidth/2)) ? -delta * 1 : -delta * 0.9 : delta)) })
                TweenMax.to($('.sp5'), 0.5, {x: ($('.sp5').position().left * (delta > 0 ? -delta : delta * -0.01 )) * 0.8})
                TweenMax.to($('.sp6'), 0.5, {x: ($('.sp6').position().left * (delta > 0 ? (scrollbar.offset.x > (window.innerWidth/2)) ? -delta * 1.5 : -delta * 1.4 : delta)), y: x * 0.05 })
                /*With*/
                TweenMax.to($('.sp7'), 0.5, {x: ($('.sp7').position().left * (delta > 0 ? -delta : delta)) * 0.35})
                TweenMax.to($('.sp8'), 0.5, {x: ($('.sp8').position().left * (delta > 0 ? -delta : delta)) * 0.42})
                TweenMax.to($('.sp9'), 0.5, {x: ($('.sp9').position().left * (delta > 0 ? -delta : delta)) * 0.50})
                TweenMax.to($('.sp10'), 0.5, {x: ($('.sp10').position().left * (delta > 0 ? -delta : delta)) * 0.45 })
                /*Movement*/
                TweenMax.to($('.sp11'), 0.5, {x: ($('.sp11').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.sp12'), 0.5, {x: ($('.sp12').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.sp13'), 0.5, {x: ($('.sp13').position().left * (delta > 0 ? -delta : delta * 0.35))})
                TweenMax.to($('.sp14'), 0.5, {x: ($('.sp14').position().left * (delta > 0 ? -delta : delta * 0.45))})
                TweenMax.to($('.sp15'), 0.5, {x: ($('.sp15').position().left * (delta > 0 ? -delta * 0.7 : delta))})
                TweenMax.to($('.sp16'), 0.5, {x: ($('.sp16').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.sp17'), 0.5, {x: ($('.sp17').position().left * (delta > 0 ? -delta : delta * 0.7))})
                TweenMax.to($('.sp18'), 0.5, {x: ($('.sp18').position().left * (delta > 0 ? (scrollbar.offset.x > (window.innerWidth/2)) ? -delta * 1.5 : -delta * 1.4 : delta * 0.5))})
                //TweenMax.to($('.latencia'), 0.5, {x: $('.sp1').position().left * (delta > 0 ? -delta * -0.5 : delta ) })
                
                TweenMax.to($('.letter1'), 0.5, {opacity: 1 - delta * 5, x: ($('.letter1').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.letter2'), 0.5, {opacity: 1 - delta * 3, x: ($('.letter2').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.letter3'), 0.5, {opacity: 1 - delta * 3, x: ($('.letter3').position().left * (delta > 0 ? -delta : delta))})
                TweenMax.to($('.letter4'), 0.5, {opacity: 1 - delta * 5, x: ($('.letter4').position().left * (delta > 0 ? -delta * 4 : delta * 1.3))})
                TweenMax.to($('.letter5'), 0.5, {opacity: 1 - delta * 3, x: ($('.letter5').position().left * (delta > 0 ? -delta : delta))})
                
                TweenMax.to($('.letter6'), 0.5, {opacity: 1 - delta, x: ($('.letter6').position().left * (delta > 0 ? -delta * 0.1 : delta * 1.3))})
                TweenMax.to($('.letter7'), 0.5, {x: ($('.letter7').position().left * (delta > 0 ? -delta * -0.2 : delta )) })
                
                TweenMax.to($('.slide__image_lineal.two'), 0.3, {x: ($('.slide__image_lineal.two').position().left * (delta > 0 ? -delta * -0.5 : delta )) })
                TweenMax.to($('#codo3'), 0.3, {x: ($('.slide__image_lineal.two').position().left * (delta > 0 ? -delta * -0.3 : delta )) })
            });
        });

        window.addEventListener("load", function () {
            document.getElementById('partial-col').style.position = 'absolute'
            console.log('borrar');
        });

    }else{
        document.addEventListener("DOMContentLoaded", function(){
				
        //needed to get scrollTop position on IE9-
        var documentElement = document.documentElement;

        //Heder height
        var targetPosY = 500;

        /*
            A couple of notes here 
            1)   For such a thing, normally I would just use a TimelineMax. It is amazingly flexible and is tend for just this kind of animations. 
                 The idea of this pen is to make things fast and simple as possible;
            2)   Actually, I can pass string to TweenLite.to("element ID", time, {...}); but I prefer to pass DOM Element
            3)   If you add your own TweenLite's and style it, actually can get pritty nice results
        */
        var tweens = [
           TweenLite.to( document.querySelector(".sp1"), 1, {css:{force3D:true, y:-160}, paused:true}),
           TweenLite.to( document.querySelector(".sp2"), 1, {css:{force3D:true, y:-90}, paused:true}),
           TweenLite.to( document.querySelector(".sp3"), 1, {css:{force3D:true, y:-80}, paused:true}),
           TweenLite.to( document.querySelector(".sp4"), 1, {css:{force3D:true, y:-120}, paused:true}),
           TweenLite.to( document.querySelector(".sp5"), 1, {css:{force3D:true, y:-90}, paused:true}),
           TweenLite.to( document.querySelector(".sp6"), 1, {css:{force3D:true, y:-180}, paused:true}),
           
           TweenLite.to( document.querySelector(".sp7"), 1, {css:{force3D:true, y:-40}, paused:true}),
           TweenLite.to( document.querySelector(".sp8"), 1, {css:{force3D:true, y:-75}, paused:true}),
           TweenLite.to( document.querySelector(".sp9"), 1, {css:{force3D:true, y:-80}, paused:true}),
           TweenLite.to( document.querySelector(".sp10"), 1, {css:{force3D:true, y:-55}, paused:true}),
           
           TweenLite.to( document.querySelector(".sp11"), 1, {css:{force3D:true, y:-100}, paused:true}),
           TweenLite.to( document.querySelector(".sp12"), 1, {css:{force3D:true, y:-90}, paused:true}),
           TweenLite.to( document.querySelector(".sp13"), 1, {css:{force3D:true, y:-120}, paused:true}),
           TweenLite.to( document.querySelector(".sp14"), 1, {css:{force3D:true, y:-120}, paused:true}),
           TweenLite.to( document.querySelector(".sp15"), 1, {css:{force3D:true, y:-110}, paused:true}),
           TweenLite.to( document.querySelector(".sp16"), 1, {css:{force3D:true, y:-140}, paused:true}),
           TweenLite.to( document.querySelector(".sp17"), 1, {css:{force3D:true, y:-100}, paused:true}),
           TweenLite.to( document.querySelector(".sp18"), 1, {css:{force3D:true, y:-130}, paused:true}),
           
           TweenLite.to( document.querySelector(".letter1"), 1, {css:{force3D:true, y:-10, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter2"), 1, {css:{force3D:true, y:-90, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter3"), 1, {css:{force3D:true, y:-130, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter4"), 1, {css:{force3D:true, y:-50, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter5"), 1, {css:{force3D:true, y:-10, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter6"), 1, {css:{force3D:true, y:-150, alpha: 0}, paused:true}),
           TweenLite.to( document.querySelector(".letter7"), 1, {css:{force3D:true, y: 10, alpha: 0}, paused:true}),
        ];

        window.onscroll = function (event) {
          ( !! window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();
        }
        
        var paso = true;
        function onScroll(){

            //have to restrict it into range, because on OSX it can get negative values
            //http://bassta.bg/2013/05/restrict-a-number-to-a-range/
                    var top =  Math.max(Math.min(window.pageYOffset || documentElement.scrollTop, targetPosY), 0); 
                    if(top <= targetPosY){
                        var progress = (top / targetPosY);
                        Array.prototype.forEach.call(tweens, function(tween){
                                tween.progress(progress);
                              });
                    }
                    
                    var top2 =  Math.max(Math.min(window.pageYOffset || documentElement.scrollTop, $( window ).height()), 0);
                  
                    if ( (top2 >= ($( window ).height() - 75) ) ) {
                      $(".main-navigation-logo-img img").fadeOut(function() {
                          $(this).attr("src","assets/img/raxo-logo-black.svg").fadeIn(100);
                      });
                      $('#menu-btnx').css({ fill: "#000000" });
                      $('#menu-btnx .cls-x').css({ stroke: "#000000" });
                      $('.all-menu span').css('color', '#000');
                      paso=false;
                    }else if (!paso){
                      $(".main-navigation-logo-img img").fadeOut(function() {
                          $(this).attr("src","assets/img/raxo-logo.svg").fadeIn(100);
                      });
                      $('#menu-btnx').css({ fill: "#ffffff" });
                      $('#menu-btnx .cls-x').css({ stroke: "#ffffff" });
                      $('.all-menu span').css('color', '#fff');
                      paso=true;
                    }
                  console.log('top'+top2 + 'slide2' + $('.slide.feature-content').position().top + 'v'+$( window ).height());
        }

      });//end on DOMContentLoaded
    }

    const $slider = $(".swiper-container2");

    $slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
//        arrows: false,
        nextArrow: $('.feature-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var isAnimate = false;

    $('.swiper-container2').on('wheel', (function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0 && e.originalEvent.deltaY > -2) {
            $(this).slick('slickNext');
        } else if (e.originalEvent.deltaY > 0 && e.originalEvent.deltaY < 2) {
            $(this).slick('slickPrev');
        }
        //console.log(e.originalEvent.deltaY)
    }));

    var element = $('.swiper-container2');

    $(element).on('setPosition', function (event, slick, currentSlide, nextSlide) {
        var slidesShown = $(element).slick('slickGetOption', 'slidesToShow');
        var numberOfSlides = $(element).find('.slick-slide').length;
        
        if (slidesShown === numberOfSlides) {
            $(element).find('.slick-track').css('transform', 'translate3d(0px, 0px, 0px)');
        }
    });
    
    $(element).on('afterChange', function (slick, currentSlide) {
        console.log($('.slick-current').children().children().attr('data-title'));
        $(".feature-work h3").fadeOut(function() {
            $(this).text($('.slick-current').children().children().attr('data-title')).fadeIn();
            $(this).attr('data-content',$('.slick-current').children().children().attr('data-title'));
        });
        $(".feature-work p").fadeOut(function() {
            $(this).text($('.slick-current').children().children().attr('data-text')).fadeIn();
        });
        $('.feature-work a').attr('href',$('.slick-current').children().children().attr('data-url'));
    });
    
    /** POINTER **/
    var t = $('.raxo_pointer');
    var mouseX = 0, mouseY = 0; 
    window.addEventListener("mousemove", function(e) {
        t.mouse = {
            x: e.clientX,
            y: e.clientY
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, !1);
    
    function render() {
        setPos();
        window.requestAnimationFrame(render);
    };
    render();
    
    var isLerp = !0;
    var interMouseX = 0,
        interMouseY = 0;
        
    function E(t, e, n) {
        return (1 - n) * t + n * e
    }
    
    function setPos() {
        var z = E(mouseX, interMouseX, .85),
            e = E(mouseY, interMouseY, .85);
        interMouseX = isLerp ? z : mouseX, interMouseY = isLerp ? e : mouseY, TweenMax.set($('.raxo_pointer'), {
            x: interMouseX,
            y: interMouseY
        });
    }
    var tl, position = 0;
            tl = new TimelineMax( {paused:true} );
            tl.to($('.all-menu'), 0.1, { autoAlpha:1 });
            tl.set($('.all-menu a'), {x:20});
            //.staggerTo($('.all-menu a'), 0.3, {autoAlpha:1, x:'+=-60px', ease: Back.easeOut}, 0.1)
            
    $(".all-menu a").each(function(index, element){
        position = (index == 0) ? -45 : position - 55;
        tl.to($('#menu-btnx'),0.1, {className:"+=active"});
        tl.add(TweenMax.fromTo(element, 0.5, { autoAlpha:0, x: 20}, {autoAlpha:1, x: position, ease: Back.easeOut}), 0.2);
    });
    
    $(document).on('click touchend', '.desktop .info img', function(){
        var elem = jQuery( ".slide.feature-content" );
        console.log('go... ' + elem.position().left);
        scrollbar.scrollTo(elem.position().left, 0, 3000,{
                callback: changeIcon()});
    });
    
    function changeIcon(){
        setTimeout(function(){
            $(".main-navigation-logo-img img").fadeOut(function() {
                $(this).attr("src","assets/img/raxo-logo-black.svg").fadeIn(100);
            })
        }, 1500);
    }
    
    $(document).on('click touchend', '.mobile .info img', function(){
        var elem = jQuery( ".slide.feature-content" );
        console.log('go... ' + elem.position().top);
        $('html, body').animate({scrollTop: elem.position().top}, 1000);
    });
    
    $(document).on('click touchend', '.desktop #menu-btnx', function(){        
            tl.reversed() ? tl.play() : tl.reverse();
            if (!$('.all-menu').hasClass('menu-circle-active')){
                $('.all-menu').addClass('menu-circle-active');
                tl.play();
            }else{
                $('.all-menu').removeClass('menu-circle-active');
            }
    })
    
    var tl2, position = 0, firstime = true;
            tl2 = new TimelineMax( {paused:true} );
            //tl2.to($('.mmmenu'), 0.1, { display: 'none'});
            TweenMax.set($('.mmmenu'), { display: 'none'});
            tl2.to($('.mmmenu'),0.1,{display: 'block'});
            tl2.to($('.mmmenu'),0.5, {height : '100%'});
            tl2.set(".main-menu li",{y:-100});
            tl2.staggerTo(".main-menu li", 0.3, {autoAlpha:1, y: 0,  ease:Back.easeOut}, 0.01);
    $(document).on('touchend', '.mobile #menu-btnx', function(){
            console.log('heyysoman HOME '+tl2.reversed());
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                
                if (firstime){
                    tl2.reverse();
                    firstime = false;
                }
                tl2.reversed() ? tl2.play() : tl2.reverse();
                $(this).removeClass('active');
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
   
    
    var body    = $( 'body' ),
		_window = $( window );
    
    function onResizeARIA() {
            console.log('resize check');
        if (_window.width() > 992) {
            if (!body.hasClass('desktop'))
                body.addClass('desktop');
            if (body.hasClass('mobile'))
                body.removeClass('mobile');
        }else{
            if (!body.hasClass('mobile'))
                body.addClass('mobile');
            if (body.hasClass('desktop'))
                body.removeClass('desktop');
        }
    }

    _window
            .on( 'load.raxo', onResizeARIA )
            .on( 'resize.raxo', function() {
                    onResizeARIA();
    } );
    
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        //var newSource = $this.data('data-alt-src');
        console.log($this.data('alt-src'));
        $(this).css('background-image','url("'+newSource+'")');
        //console.log($(this).css('background-image').replace(/url\(("|')(.+)("|')\)/gi, newSource));
        $this.data('alt-src', $this.data('src'));
        $this.data('src', newSource);
        //$this.attr('src', newSource);
    }

    $(function() {
        $('.swap[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

}(jQuery))