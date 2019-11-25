/* eslint-disable */
// import $ from 'jquery';
// import Scrollify from 'jquery-scrollify';
import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "../../../cursor";
import image1 from "../../desktop/reel.jpg";
import image2 from "../../desktop/london.jpg";
import image3 from "../../desktop/humanified.jpg";
import image4 from "../../desktop/showtime.jpg";
import image5 from "../../desktop/coloredge.jpg";

import image6 from "../../mobile/reel.jpg";
import image7 from "../../mobile/london.jpg";
import image8 from "../../mobile/humanified.jpg";
import image9 from "../../mobile/showtime.jpg";
import image10 from "../../mobile/coloredge.jpg";
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";


export function webHome(){
  var cursor = new Cursor(document.querySelector('.cursor'));

  const container = document.getElementById("slider-loader");
  const slidesData = [
    {
      image: image1,
      imageMobile: image6,
      title: "Reel ´19",
      meta: "Branding & Motion Graphics",
      //link: "portfolio.html?raxo-reel",
      titleColor: "white",
      theme: "dark",  
      video: "http://catch24dev.com/raxo-vue/videos/Raxo%20Reel%202019.mp4",
      iconShadow: true
    },
    {
      image: image2,
      imageMobile: image7,
      title: "London Calling",
      meta: "Motion  Graphics",
      link: "#/creative-work/bbc-entertainment-london-calling-design",
      titleColor: "white"
    },
    {
      image: image3, 
      imageMobile: image8,
      title: "Humanified",
      meta: "Web Design",
      link: "#/creative-work/humanifed-branding-web-design-app-development",
      logoColor: "black",
      animation: "none"
    },
    {
      image: image4,
      imageMobile: image9,
      title: "Ray Donovan",
      meta: "Photography",
      link: "#/creative-work/showtime",
      titleColor: "white",
      theme: "dark"
    }, 
    {
      image: image5,
      imageMobile: image10,
      title: "Coloredge",
      meta: "Design <br> Web Design <br> Strategy",
      link: "#/creative-work/coloredge-is-a-unique-media-company" ,
      titleColor: "white",
      theme: "dark"
    } 
  ];
  
  // if ($(window).width() > 768) {
    const slides = new Slides(slidesData);
  
    const showcase = new Showcase(slidesData, {
      onActiveIndexChange: activeIndex => {
        if([...document.querySelectorAll('.openedDesktop')].length === 0){
          slides.onActiveIndexChange(activeIndex);
        }
      },
      onIndexChange: index => {
        if([...document.querySelectorAll('.openedDesktop')].length === 0){
          slides.onMove(index);
        }
      },
      onZoomOutStart: ({ activeIndex }) => {
        if([...document.querySelectorAll('.openedDesktop')].length === 0){
          cursor
          cursor.enter();
          slides.appear();
        }
      },
      onZoomOutFinish: ({ activeIndex }) => {
      },
      onFullscreenStart: ({ activeIndex }) => {
        if([...document.querySelectorAll('.openedDesktop')].length === 0){
          cursor.leave();
          slides.disperse(activeIndex);
        }
      },
      onFullscreenFinish: ({ activeIndex }) => {
      }
    });
  
    showcase.mount(container);
    slides.mount(container);
    showcase.render();

    window.addEventListener("resize", function() {
      showcase.onResize();
    });
  
    window.addEventListener("mousemove", function(ev) {
      if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') ){
      }else{
        if([...document.querySelectorAll('.openedDesktop')].length === 0){
          showcase.onMouseMove(ev);
        }else{
        }
      }
    });

    var slices = [document.querySelectorAll(".uncover_slice")];
    var tl = new TimelineLite();
    tl.staggerTo(".uncover_slice", 1, { height: "0px" }, 0.6);
    TweenMax.to(".myimg", 1, { scale: 1.1 });

  // Hover over the elements to change the cursor 
  var slideTitle = [...document.querySelectorAll('.show-meta .slide-title')];
  var slideMeta = [...document.querySelectorAll('.show-meta .slide-meta')];
  var slideButton = [...document.querySelectorAll('.slide-more')];
  var imaginaryFrame = [...document.querySelectorAll('.imaginary__frame')];
  var pagination = [...document.querySelectorAll('#pageContent .pagination')];
  var logo = [...document.querySelectorAll('.logo img')];
  var menuIcon = [...document.querySelectorAll('.menu__icon')];


  var slideElement = []; 
      slideElement = slideElement.concat(slideButton);
  slideElement.forEach(function(slide) {
    if(window.location.href.includes('work') || window.location.href.includes('team') || window.location.href.includes('contact') || window.location.href.includes('about')  ){
      cursor[0].classList.remove("its__home");
      cursor[0].classList.remove("white-cursor");
    }else{
      slide.addEventListener("mouseenter", function() {
        var cursor = [...document.querySelectorAll('.cursor')];
        cursor[0].classList.remove("its__home");
        var cursorMessage = [...cursor[0].children];
            cursorMessage = cursorMessage[0].children;
            cursorMessage[0].style.display = "none";
      });
      slide.addEventListener("mouseleave", function() {
        var cursor = [...document.querySelectorAll('.cursor')];
        cursor[0].classList.add("its__home");
        var cursorMessage = [...cursor[0].children];
        cursorMessage = cursorMessage[0].children;
        cursorMessage[0].style.display = "block";
      });
    }
  });


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var moreButtons = [...document.querySelectorAll('.slide-more')];
  moreButtons.forEach(button => {
    button.addEventListener("mouseenter", function() {
      var cursor = [...document.querySelectorAll('.cursor')];
      // cursor[0].classList.remove("white-cursor");
    });
    button.addEventListener("mouseleave", function() {
      var cursor = [...document.querySelectorAll('.cursor')];
      var currentSlide = [...document.querySelectorAll('.slide.show-meta')];
      if(currentSlide.length){
        if(currentSlide[0].classList.contains('dark-themed')){
          // cursor[0].classList.add("white-cursor");
        }
      }

    });
  });

  //document.getElementById("menuControlClose").addEventListener("click", closeNav);
  
  if(window.screen.width < 768){
		let cursorText = [...document.querySelectorAll('.cursor__inner small')];
		cursorText[0].innerHTML = "Hold <br> & Drag";
	}else{
		let cursorText = [...document.querySelectorAll('.cursor__inner small')];
		cursorText[0].innerHTML = "Click <br> & Drag";
  }
  

}


