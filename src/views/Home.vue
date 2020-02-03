<template>
  <div class="section__wrapper home">
    <title>
      Raxo - A Design Studio NYC, Motion Graphic and Web Design Company
    </title>
    <meta
      name="description"
      content="RAXO is a creative design studio in NYC and that specializes in specializing in digital design, motion graphics, web design, branding and animation for startups & entertainment companies. Call today!"
    />

    <meta
      name="keyword"
      content="design studios nyc, web design new york, web design company new york, graphic design studios nyc, motion graphic designer, animation studios nyc, motion graphics animation, motion graphics creator, motion graphics designer"
    />
    <div id="mobile-slider-loader">
      <!-- the content -->
    </div>
    <main id="pageContent">
      <div class="imaginary__frame" />
      <div id="slider-loader">
        <!-- the content -->
      </div>
      <div class="pagination">
        <span class="current_page">01</span>
        <span class="line_pagination" />
        <span class="total_page" />
      </div>

      <div class="mobile__home__message">
        <p>Tap & Drag</p>
      </div>
    </main>
  </div>
</template>

<script>
import { webHome } from "../assets/home/js/index";
export default {
  components: {},
  mounted() {
    document.body.style.overflow = "hidden";

    setTimeout(function() {
      const videoButtons = [...document.querySelectorAll(".has-video")];
      videoButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          const existVideo = [...document.querySelectorAll(".popup__wrapper")];
          if (!existVideo.length) {
            // Get the video url
            const video = button.getAttribute("data-video");
            // Create the div that sorrund the popup element
            const node = document.createElement("div");
            // Create the popup element
            node.className = "popup__wrapper";
            const videoData = `
                <div class="close__popup">x</div>
                <div class="video__wrapper">
                  <iframe src="${video}?autoplay=1" width="100%" height="100vh" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                `;
            // Insert the popup into the div
            node.innerHTML = videoData;
            // Insert the popup into the body
            document.body.appendChild(node);
            // We grab the button for closing the popup
            const closePopupButton = document.querySelector(".close__popup");
            // Make the canvas unclikable so we would not change anything while the popup its open
            document.querySelector(".menu__icon").style.display = "none";
            document.querySelector(".cursor").style.display = "none";

            // Create an eventListener for the button and closing the popup
            closePopupButton.addEventListener("click", function() {
              const thePopup = document.querySelector(".popup__wrapper");
              document.querySelector(".menu__icon").style.display = "block";
              document.querySelector(".cursor").style.display = "flex";
              document.body.removeChild(thePopup);
            });
          }
        });
      });
    }, 1000);

    setTimeout(function() {
      const videoButtons = [...document.querySelectorAll(".has-video")];

      videoButtons.forEach(element => {
        element.innerHTML = "Play";
      });

      videoButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          const existVideo = [...document.querySelectorAll(".popup__wrapper")];
          if (!existVideo.length) {
            // Get the video url
            const video = button.getAttribute("data-video");
            // Create the div that sorrund the popup element
            const node = document.createElement("div");
            // Create the popup element
            node.className = "popup__wrapper";
            const videoData = `
              <div class="close__popup">x</div>
              <div class="video__wrapper" id="playing_video">
                <video width="100%" height="100%" controls autoplay>
                  <source src="${video}" type="video/mp4">
                </video>
              </div>
              `;
            // Insert the popup into the div
            document.querySelector(".menu__icon").style.display = "none";
            const theCursor = document.querySelector(".cursor");
            theCursor.classList.add("morphed--cursor");
            node.innerHTML = videoData;
            // Insert the popup into the body
            document.body.appendChild(node);
            // We grab the button for closing the popup
            const closePopupButton = document.querySelector(".close__popup");
            // Make the canvas unclikable so we would not change anything while the popup its open

            // Create an eventListener for the button and closing the popup
            closePopupButton.addEventListener("click", function() {
              document.querySelector(".menu__icon").style.display = "flex";
              const theCursor = document.querySelector(".cursor");
              theCursor.classList.remove("morphed--cursor");
              const thePopup = document.querySelector(".popup__wrapper");
              document.body.removeChild(thePopup);
            });
          }
        });
      });
    }, 50);

    document.querySelector(".menu__icon").classList.remove("dark__menu");
    document.querySelector(".cursor p small").innerHTML = "Click <br> & Drag";
    webHome();

    if (window.screen.width < 768) {
      (function() {
        let touchStartHandler, touchMoveHandler, touchPoint;

        // Only needed for touch events on chrome.
        if (
          (window.chrome || navigator.userAgent.match("CriOS")) &&
          "ontouchstart" in document.documentElement
        ) {
          touchStartHandler = function() {
            // Only need to handle single-touch cases
            touchPoint =
              event.touches.length === 1 ? event.touches[0].clientY : null;
          };

          touchMoveHandler = function(event) {
            // Only need to handle single-touch cases
            if (event.touches.length !== 1) {
              touchPoint = null;

              return;
            }

            // We only need to defaultPrevent when scrolling up
            const newTouchPoint = event.touches[0].clientY;
            if (newTouchPoint > touchPoint) {
              event.preventDefault();
            }
            touchPoint = newTouchPoint;
          };

          document.addEventListener("touchstart", touchStartHandler, {
            passive: false
          });

          document.addEventListener("touchmove", touchMoveHandler, {
            passive: false
          });
        }
      })();
    }
  }
};
</script>

<style>
.section__wrapper.home {
  background: white;
}
.first__loader__gif {
  animation: show__gif 0.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-delay: 0s;
  opacity: 1 !important;
}
.outScreen {
  display: none;
  position: absolute;
  left: -5000px;
}
#app {
  overflow: hidden;
}
.scrolling .slide-more {
  opacity: 0 !important;
  transition: opacity 0s ease-in-out !important;
}
canvas {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}
.slides {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  padding: 0 10vw;
  width: 100%;
  max-width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}
.mobile__home__message {
  display: none;
}
.slide {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 33vh;
  color: #fff;
  transform: translateY(-50%);
  transition: transform 1300ms cubic-bezier(0.2, 1, 0.3, 1),
    opacity 500ms cubic-bezier(0.2, 1, 0.3, 1);
}
.slide-meta {
  margin: 0;
  font-size: 1.35rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slide-meta,
.slide-more {
  padding: 0 9px;
  opacity: 0;
  transition: opacity 900ms cubic-bezier(0.2, 1, 0.3, 1);
}
.show-meta .slide-meta,
.show-meta .slide-more {
  opacity: 1;
  transition: opacity 1500ms 300ms cubic-bezier(0.2, 1, 0.3, 1);
  cursor: none !important;
}
.slide-more {
  /*border-bottom: 1px solid;*/
  display: inline-block;
  padding: 15px 0;
  pointer-events: all;
}
.slide-more:hover {
  border-bottom: none;
  color: #111111;
}
.cls-1,
.cls-2 {
  transition: all ease-in-out 0.7s;
}
.scrolling .cls-1,
.scrolling .cls-2 {
  fill: #111111 !important;
}
.cls-1.black-v,
.cls-2.black-v {
  fill: #111111 !important;
}
.help-down.black-v {
  border-bottom: 2px solid #111111;
  border-right: 2px solid #111111;
}
.frame__tip.black-v {
  color: #111111;
}
.help-mouse-down.black-v {
  border: 2px solid #111111;
}
.help-mouse-wheel.black-v:before,
.help-mouse-wheel.black-v:after {
  content: "";
  background: black;
}
.scrolling .menu__icon i,
.menu__icon.black-icon i {
  border: solid 2.3px #111111;
}
.scrolling .menu__icon:hover i,
.scrolling .menu__icon.black-icon:hover i {
  background: black;
  transition: 0.3s ease-in;
}
.slide-title {
  font-size: 4.5vw;
  margin: 0;
  text-indent: -0.5vw;
  font-family: "MarkPro", sans-serif;
  font-weight: 900;
  transition: color 500ms cubic-bezier(0.2, 1, 0.3, 1);
  text-decoration: none;
  text-transform: uppercase;
}
.slide-more {
  background: white;
  color: #111111 !important;
  padding: 11px 25px;
  font-weight: 100;
  border-radius: 50px;
  font-size: 16px;
  font-family: MarkPro, sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 13.5px;
  border: none;
  transition: opacity 0s ease-in-out !important;
}
.frame__tip span {
  font-family: "MarkPro", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
}
.slide-meta {
  color: #111111;
}
.slide.show-meta .slide-title {
  color: #111111;
}
.slide.white-meta .slide-title {
  color: #ffffff;
  text-align: left;
}
.slide.white-meta .slide-meta {
  color: #ffffff;
  text-align: left;
}
.slide .slide-meta {
  color: #777777;
  font-size: 9px;
  padding-bottom: 40px;
  position: relative;
  top: 10px;
  text-transform: uppercase;
  font-family: "MarkPro-Book", sans-serif;
  font-weight: normal;
  letter-spacing: 3px;
  line-height: 2em;
}
.slide h1 {
  position: relative;
}
.slide h1 {
  padding: 0 10px;
  overflow: hidden;
  mix-blend-mode: difference;
  padding-bottom: 37px;
}
.slide h1:before {
  padding: 0 10px;
  content: attr(data-title);
  position: absolute;
  z-index: 0;
  overflow: hidden;
  white-space: nowrap;
  width: 20vw;
  left: 0;
  color: #111111;
  top: 0px;
  bottom: 0;
  right: 0;
  transition: all ease-in-out 0.5s;
  -webkit-animation: wavig-bf 0.59s infinite; /* Safari 4+ */
  -moz-animation: wavig-bf 0.59s infinite; /* Fx 5+ */
  -o-animation: wavig-bf 0.59s infinite; /* Opera 12+ */
  animation: wavig-bf 0.59s infinite; /* IE 10+, Fx 29+ */
  animation-delay: 0.55s;
}
.scrolling .help-down {
  border-bottom: 2px solid white;
  border-right: 2px solid white;
}
/* waving animation for the overlaped text */
.slide.show-meta h1:before {
  animation: none !important;
  transition: all ease-in-out 0.5s;
  left: -1000px !important;
  opacity: 0 !important;
}
.slide h1 span {
  display: block;
}
.slide h1 span:before {
  content: "";
  width: 25%;
  border-bottom: 8px solid #4d2174;
  position: absolute;
  display: block;
  bottom: 0;
}
.prev,
.next {
  opacity: 0;
}
.prev {
  transform: translateY(-85%);
}
.next {
  transform: translateY(-15%);
}
.prev .slide-title,
.next .slide-title {
  -webkit-text-stroke: 1.5px #c7c7c7;
  text-stroke: 1.5px #c7c7c7;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  color: transparent;
}
.scrolling > .slide {
  transform: translateY(-50%);
  opacity: 1;
}
.frame__tip {
  color: #fff;
  font-size: 20px;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: calc(100vw - 4rem);
  padding-bottom: 25px;
}

.mouse {
  margin: 0 auto;
  opacity: 0.6;
  position: relative;
  transition: opacity 0.9s;
  width: 34px;
}
.mouse:hover {
  opacity: 1;
}
.mouse:hover .help-mouse-wheel:before,
.mouse:hover .help-mouse-wheel:after {
  animation: indicator-up-down 1.5s infinite ease-in-out;
  height: 8px;
  opacity: 0;
}
.mouse:hover .help-down {
  animation: arrow-down 0.3s infinite alternate;
}
.help-mouse-down {
  border: 2px solid #fff;
  border-radius: 17px;
  height: 50px;
  margin: 15px auto 10px;
  position: relative;
  width: 30px;
}
.help-mouse-wheel {
  position: relative;
  left: 50%;
  transition: opacity 0.5s;
}
.help-mouse-wheel:before,
.help-mouse-wheel:after {
  content: "";
  background: #fff;
  border-radius: 50%;
  margin-left: -15px;
  height: 4px;
  position: absolute;
  top: 5px;
  transition: top 0.5s, height 0.5s, opacity 0.5s;
  width: 4px;
}
.help-mouse-wheel:before {
  animation: scroll 1.5s 0.75s infinite ease-in-out;
}
.help-mouse-wheel:after {
  animation: scroll 1.5s infinite ease-in-out;
}
.help-down {
  animation: arrow-down 0.6s infinite alternate ease-in-out;
  border-bottom: 2px solid #cdcdcd;
  border-right: 2px solid #cdcdcd;
  display: block;
  height: 5px;
  margin: 0 auto;
  transform: rotate(45deg);
  transition: opacity 0.5s;
  width: 5px;
  margin-bottom: 10px;
}
@-moz-keyframes scroll {
  0% {
    top: 5px;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 15px;
    opacity: 0;
  }
}
@-webkit-keyframes scroll {
  0% {
    top: 5px;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 15px;
    opacity: 0;
  }
}
@-o-keyframes scroll {
  0% {
    top: 5px;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 15px;
    opacity: 0;
  }
}
@keyframes scroll {
  0% {
    top: 5px;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 15px;
    opacity: 0;
  }
}
@-moz-keyframes indicator-up-down {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}
@-webkit-keyframes indicator-up-down {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}
@-o-keyframes indicator-up-down {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}
@keyframes indicator-up-down {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}
@-moz-keyframes arrow-down {
  0% {
    margin-top: 5px;
  }
  100% {
    margin-top: 15px;
  }
}
@-webkit-keyframes arrow-down {
  0% {
    margin-top: 5px;
  }
  100% {
    margin-top: 15px;
  }
}
@-o-keyframes arrow-down {
  0% {
    margin-top: 5px;
  }
  100% {
    margin-top: 15px;
  }
}
@keyframes arrow-down {
  0% {
    margin-top: 5px;
  }
  100% {
    margin-top: 15px;
  }
}

.menu__icon {
  padding: 15px;
  z-index: 999;
  cursor: none;
}
.frame__tip {
  display: none;
}
.menu__icon i {
  background: transparent;
  display: block;
  width: 26px;
  height: 26px;
  border: solid 2.3px #fcfcfc;
  border-radius: 50%;
  transition: 0.3s ease-out;
}
.menu__icon i.shadow {
  box-shadow: 0px 0px 35px 6px rgba(0, 0, 0, 0.48);
}
.menu__icon:hover i {
  background: #fff;
  transition: 0.3s ease-in;
}
header span.menu-control-close {
  width: 25px;
}
.menu {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #373331;
  color: #f0f0f0;
  width: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.menu a {
  transform: translate3d(-150px, 0, 0);
  transition: transform 0.15s ease-in;
}

.menu--active {
  height: 100vh;
  overflow: hidden;
}
.menu--active nav a:first-child {
  transition-delay: 0.2s;
}
.menu--active nav a:nth-child(2) {
  transition-delay: 0.3s;
}
.menu--active nav a:last-child {
  transition-delay: 0.4s;
}
.menu--active .menu-inner {
  background: #111;
  color: #fff;
  width: 100vw;
  height: 100vw;
  position: fixed;
  z-index: 99999;
  right: 0;
}
.nav__links {
  padding-top: 5vh;
  padding-left: 5vw;
  font-family: "MarkPro-Book";
  flex-direction: column;
  display: flex;
}

.bottom__links {
  display: flex;
  padding: 0 20px 0 40px;
  position: absolute;
  bottom: 50px;
  justify-content: space-evenly;
  width: 100%;
  text-transform: uppercase;
}
.bottom__links a {
  font-size: 10px;
  letter-spacing: 1px;
}
.imaginary__frame {
  position: absolute;
  top: 0;
  bottom: 0;
  /* left: 0; */
  right: 0;
  margin: auto auto;
  width: 81%;
  height: 100%;
  z-index: 9999;
}
#pageContent {
  position: relative;
  width: 100%;
  height: 100vh;
}
#pageContent .pagination {
  position: absolute;
  right: -15px;
  bottom: 0;
  top: 0;
  margin: auto;
  transform: rotate(90deg);
  width: 125px;
  display: flex;
  font-family: "MarkPro-Book", serif;
  letter-spacing: 1px;
  height: 30px;
}
#pageContent .pagination .current_page {
  position: relative;
  top: -6px;
  font-size: 10px;
  color: #ffffff;
  left: -15px;
  transition: all ease-in-out 0.3s;
}
#pageContent .pagination .total_page {
  position: relative;
  top: -6px;
  font-size: 10px;
  color: #ffffff;
  left: 15px;
  transition: all ease-in-out 0.3s;
}
#pageContent .pagination .line_pagination {
  height: 1px;
  width: 402px;
  border: solid 0.5px white;
  background: white;
  transition: all ease-in-out 0.3s;
}
.scrolling.pagination .current_page {
  color: #111111 !important;
}
.scrolling.pagination .total_page {
  color: #111111 !important;
}
.scrolling.pagination .line_pagination {
  border: solid 0.5px #111111 !important;
  background: #111111 !important;
}
.black-v.pagination .current_page {
  color: #111111 !important;
}
.black-v.pagination .total_page {
  color: #111111 !important;
}
.black-v.pagination .line_pagination {
  border: solid 0.5px #111111 !important;
  background: #111111 !important;
}
.slide.no-animation h1:before {
  animation: none !important;
}
.slide.no-animation h1:before {
  width: 100%;
}
.cursor.white-cursor .cursor__inner--circle {
  border: 1px solid #c14268;
}
.cursor.white-cursor .cursor__inner--dot {
  background: #c14268;
}
.cursor.its__home.scrolling .cursor__inner--dot {
  border: solid 1px #0000005c;
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: border ease 0.5s;
}
.slides {
}
.slide.show-meta {
  pointer-events: all;
}
.popup__wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: black;
  opacity: 0;
  animation: showPop 0.5s forwards ease-in-out;
}
@keyframes showPop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.floating-shadow {
  opacity: 1;
  -webkit-transition: all ease-in-out 0.8s;
  transition: all ease-in-out 0.8s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  pointer-events: none;
  height: 100px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#000000a6),
    to(transparent)
  );
  background: linear-gradient(to bottom, #000000c7, transparent);
  position: fixed;
  width: 100%;
  z-index: 99;
  left: 0;
}
.video__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.video__wrapper iframe {
  height: 100vh;
}
.close__popup {
  position: absolute;
  right: 30px;
  top: 0px;
  z-index: 99999;
  color: white;
  font-size: 47px;
  cursor: pointer;
}
.video__wrapper {
  width: 100%;
}
.video__wrapper video {
  object-fit: cover;
  height: 100vh;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@media (max-width: 4000px) {
  .container {
    width: 50% !important;
  }
  .imaginary__frame {
    width: 89%;
  }
  /* waving animatio4 for the overlaped text */
  @-webkit-keyframes6wavig-bf {
    0% {
      width: 18vw;
    }
    50% {
      width: 17vw;
    }
    50% {
      width: 19vw;
    }
    100% {
      width: 18vw;
    }
  }
  @-moz-keyframes wa6ig-bf {
    0% {
      width: 18vw;
    }
    50% {
      width: 17vw;
    }
    50% {
      width: 19vw;
    }
    100% {
      width: 18vw;
    }
  }
  @-o-keyframes wavi6-bf {
    0% {
      width: 18vw;
    }
    50% {
      width: 17vw;
    }
    50% {
      width: 19vw;
    }
    100% {
      width: 18vw;
    }
  }
  @keyframes wavig-bf {
    0% {
      width: 18vw;
    }
    50% {
      width: 17vw;
    }
    50% {
      width: 19vw;
    }
    100% {
      width: 18vw;
    }
  }
  .slide h1:before {
    /* transition: all ease-in-out 1.2s;
		-webkit-animation: wavig-bf 2s infinite; 
		-moz-animation:    wavig-bf 2s infinite; 
		-o-animation:      wavig-bf 2s infinite; 
		animation:         wavig-bf 2s infinite; IE 10+, Fx 29+ */
    transition: all ease-in-out 0.5s;
    -webkit-animation: wavig-bf 0.59s infinite; /* Safari 4+ */
    -moz-animation: wavig-bf 0.59s infinite; /* Fx 5+ */
    -o-animation: wavig-bf 0.59s infinite; /* Opera 12+ */
    animation: wavig-bf 0.59s infinite; /* IE 10+, Fx 29+ */
    animation-delay: 1s;
  }
  .slides {
    width: 100%;
    left: 10%;
  }
  #pageHeader {
    position: absolute;
    top: 0;
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  #pageContent .pagination {
    position: absolute;
    right: 4%;
  }
  .frame {
    left: -30px;
  }
  .header__wrapper {
    width: 100%;
  }
  .menu__icon {
    position: absolute;
  }
  .menu__icon.opened__menu i {
    background: transparent;
    border: solid 2.3px #d13368;
  }
  .menu__icon.opened__menu:hover i {
    background: #d13368;
    border: solid 2.3px #d13368;
  }
  .slide h1 {
    font-size: 5.5vw;
  }
  .slide h1:before {
    width: 6vw;
  }
  .frame .logo svg {
    width: 100px;
  }
  .menu__icon i {
    width: 35px;
    height: 35px;
  }
  .hero {
    margin: 200px 0px 70px 100px;
  }
  .sidenav.openedDesktop {
    width: 50vw;
  }
  .menu__icon {
    z-index: 9999999999;
  }
  .nav__links {
    padding-top: 2.5vh;
  }
  #teampage {
    width: 58%;
  }
  .slide-title,
  .slide-more,
  .slide-meta {
    left: -10%;
    position: relative;
  }
  .hero p:nth-child(3) {
    max-width: 50%;
  }
}
@media (max-width: 3000px) {
  .nav__links {
    padding-top: 2.4vh;
  }
}
@media (max-width: 2500px) {
  .hero p:nth-child(3) {
    max-width: 76%;
  }
  .imaginary__frame {
    width: 81%;
  }
}
@media (max-width: 2000px) {
  .frame .logo svg {
    width: 55px;
  }
  .hero p:nth-child(3) {
    max-width: 76%;
  }
  .slide-title,
  .slide-more,
  .slide-meta {
    left: 0%;
    position: relative;
  }
  .sidenav.openedDesktop {
    width: 28vw;
  }
  #teampage {
    width: 100%;
  }
  .container {
    width: 90% !important;
  }
  .container {
    width: 1170px;
  }
  .slides {
    width: 70%;
    left: 0%;
  }
  .nav__links {
    padding-top: 3.5vh;
  }
  .hero {
    margin: 200px 140px 70px;
  }
  .menu__icon i {
    width: 26px;
    height: 26px;
  }

  .frame {
    left: -10px;
    top: -10px;
  }
  .slide h1 {
    font-size: 4.5vw;
  }
  .slides {
    width: 100%;
  }
  #pageContent .pagination {
    right: -15px;
  }
  #pageHeader {
    width: 100%;
  }
}
@media (max-width: 1920px) {
  /* waving animation for the overlaped text */
  @-webkit-keyframes wavig-bf {
    0% {
      width: 12vw;
    }
    50% {
      width: 11vw;
    }
    50% {
      width: 13vw;
    }
    100% {
      width: 12vw;
    }
  }
  @-moz-keyframes wavig-bf {
    0% {
      width: 12vw;
    }
    50% {
      width: 11vw;
    }
    50% {
      width: 13vw;
    }
    100% {
      width: 12vw;
    }
  }
  @-o-keyframes wavig-bf {
    0% {
      width: 12vw;
    }
    50% {
      width: 11vw;
    }
    50% {
      width: 13vw;
    }
    100% {
      width: 12vw;
    }
  }
  @keyframes wavig-bf {
    0% {
      width: 12vw;
    }
    50% {
      width: 11vw;
    }
    50% {
      width: 13vw;
    }
    100% {
      width: 12vw;
    }
  }
  .slide h1:before {
    width: 12vw;
    transition: all ease-in-out 0.5s;
    -webkit-animation: wavig-bf 0.59s infinite; /* Safari 4+ */
    -moz-animation: wavig-bf 0.59s infinite; /* Fx 5+ */
    -o-animation: wavig-bf 0.59s infinite; /* Opera 12+ */
    animation: wavig-bf 0.59s infinite; /* IE 10+, Fx 29+ */
    animation-delay: 0.55s;
  }
}
@media (max-width: 2000px) {
  /* waving animation for the overlaped text */
  @-webkit-keyframes wavig-bf {
    0% {
      width: 20vw;
    }
    50% {
      width: 19vw;
    }
    50% {
      width: 21vw;
    }
    100% {
      width: 20vw;
    }
  }
  @-moz-keyframes wavig-bf {
    0% {
      width: 20vw;
    }
    50% {
      width: 19vw;
    }
    50% {
      width: 21vw;
    }
    100% {
      width: 20vw;
    }
  }
  @-o-keyframes wavig-bf {
    0% {
      width: 20vw;
    }
    50% {
      width: 19vw;
    }
    50% {
      width: 21vw;
    }
    100% {
      width: 20vw;
    }
  }
  @keyframes wavig-bf {
    0% {
      width: 20vw;
    }
    50% {
      width: 19vw;
    }
    50% {
      width: 21vw;
    }
    100% {
      width: 20vw;
    }
  }
  .slide h1:before {
    width: 20vw;
    transition: all ease-in-out 0.5s;
    -webkit-animation: wavig-bf 0.59s infinite; /* Safari 4+ */
    -moz-animation: wavig-bf 0.59s infinite; /* Fx 5+ */
    -o-animation: wavig-bf 0.59s infinite; /* Opera 12+ */
    animation: wavig-bf 0.59s infinite; /* IE 10+, Fx 29+ */
    animation-delay: 0.55s;
  }
}
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
  .menu__icon {
    right: 10px;
  }
}

@media (max-width: 768px) {
  .frame__tip {
    display: none !important;
  }
  .video__wrapper video {
    object-fit: unset;
    height: auto;
  }
  .frame {
    padding: 2rem 5vw 2rem 40px;
    text-align: left;
    position: relative;
    z-index: 1000;
    width: calc(100% - 100px);
  }
}
@media (max-width: 500px) {
  .video__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slides {
    padding: 0vw;
  }
  .slide {
    padding: 0 30px;
    width: 100%;
  }
  .video__wrapper iframe {
    height: 84vh;
  }
  .cursor {
    display: none !important;
  }
  .mobile__home__message {
    display: block;
    position: fixed;
    z-index: 99;
    bottom: 10%;
    width: 100%;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bold;
    background: #00000000;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    text-align: left;
    padding: 0 35px;
  }
  .mobile__home__message p {
    font-weight: 900;
    margin: 0;
    -webkit-animation: 0;
    animation: 0;
    padding: 2px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "MarkPro-Book";
  }

  .slide h1 {
    font-size: 42px;
  }
  .slide h1:before {
    white-space: unset;
  }
  .slide .slide-meta {
    color: #777777;
    font-size: 12px;
    padding-bottom: 55px;
    width: 200px;
  }
  .slide-more {
    padding: 11px 15px;
    font-size: 11.5px;
  }
  .slide-more.has-video {
    padding: 11px 25px;
  }
  .imaginary__frame {
    position: absolute;
    top: 0;
    bottom: 0;
    /* left: 0; */
    right: 0;
    margin: auto auto;
    width: 69%;
    height: 100%;
    z-index: 9999;
  }
  .content {
    height: 100vh !important;
  }
  #mobile-slider-loader {
    display: none;
  }
  .slides {
    justify-content: center;
    align-items: center;
  }
  #slider-loader,
  .slides,
  .slide,
  #pageContent .pagination,
  #pageContent .pagination .current_page,
  #pageContent .pagination .total_page {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .scrolling .slide {
    height: 30vh;
  }
  .slide {
    height: 45vh;
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    transition: height 0.2s ease-in-out;
  }
  .menu__icon.pill__menu {
    right: 40px;
    top: 45px;
    position: fixed;
  }
  .menu__icon {
    right: 40px;
    top: 45px;
    padding: 0;
  }
  .prev .slide-title,
  .next .slide-title {
    -webkit-text-stroke: 0.5px #c7c7c7;
  }
  .slide h1 {
    padding: 0 10px 65px;
    overflow: unset;
    word-spacing: 100vw;
  }
  html,
  body {
    overflow-x: hidden;
  }
  #pageContent .pagination {
    display: none;
  }
  #pageContent {
    overflow: hidden;
  }
  .frame .logo {
    position: fixed;
    position: absolute;
    top: 40px;
    left: 36px;
    z-index: 100;
    padding: 0;
  }
  #pageContent .pagination {
    position: fixed;
    top: 0px;
  }
  .bottom__links a {
    font-size: 10px !important;
  }
  .bottom__links {
    bottom: 130px;
    padding: 0 20px 0 20px;
  }
}
@media (max-width: 414px) {
  .slide {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
  }
  canvas {
    height: 100vh !important;
  }
}
@media (max-width: 380px) and (max-height: 666px) {
  canvas {
    height: 100vh !important;
  }
}
@media (max-width: 375px) {
  canvas {
    height: 100vh !important;
  }
}
@media (max-width: 330px) {
  canvas {
    height: 100vh !important;
  }
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden] {
  display: none;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
mark {
  background: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
}
q {
  quotes: "\201C""\201D""\2018""\2019";
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 0;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}

.cursor.cursor.its__home {
  mix-blend-mode: unset;
}
.cursor.its__home .cursor__inner--circle {
  transition: height ease 0.3s, width ease 0.3s, background ease 0.1s;
}
.slides.scrolling .slide-title,
.slides.scrolling .slide-meta {
  pointer-events: none;
  transition: height 0.2s ease-in-out;
}
.slide {
  transition: height 0.1s ease-in-out;
}
.cursor.its__home.scrolling .cursor__inner--circle {
  border: 1px solid #0000007d !important;
}
.cursor.its__home .cursor__inner--dot {
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  color: #111111;
  font-family: "MarkPro-Book", serif;
  line-height: 1em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.cursor.its__home .cursor__inner--circle p {
  color: #111111;
  font-family: "MarkPro-Book", serif;
  line-height: 1em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0px;
  padding: 0px;
  text-align: center;
}
/* Page Loader */
.js .loading::before {
  content: "";
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
}

.js .loading::after {
  content: "";
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  background: var(--color-link);
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}
@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}
a {
  text-decoration: none;
  color: var(--color-link);
  outline: none;
}
a:hover,
a:focus {
  color: var(--color-link-hover);
  outline: none;
}
.frame {
  padding: 3rem 5vw;
  text-align: center;
  position: relative;
  z-index: 1000;
}
.frame__title {
  font-size: 1rem;
  margin: 0 0 1rem;
  font-weight: normal;
}
.frame__links {
  display: inline;
}
.frame__links a:not(:last-child),
.frame__demos a:not(:last-child) {
  margin-right: 1rem;
}
.frame__demos {
  margin: 1rem 0;
}
.frame__demo--current,
.frame__demo--current:hover {
  color: var(--color-text);
}
.content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 13rem);
  position: relative;
  justify-content: flex-start;
  align-items: center;
}
.pagination.dark__navigation .current_page,
.pagination.dark__navigation .total_page {
  color: #111111 !important;
}
#pageContent .pagination.dark__navigation .line_pagination {
  border: solid 0.5px #111111;
  background: black;
}
a.slide-more:hover,
a.slide-more:visited,
a.slide-more:active,
a.slide-more:focus {
  color: #111111 !important;
  text-decoration: none;
}
.slide,
.slides,
.slides.scrolling {
}
#mobile-slider-loader .section-class-name {
  background-size: cover !important;
  background-position: center !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
}
#mobile-slider-loader .slide-title {
  font-size: 9.5vw;
  color: white;
  text-align: left;
}
#mobile-slider-loader .slide-meta {
  opacity: 1;
  padding: 0;
  margin-bottom: 20px;
}
#mobile-slider-loader .slide-more {
  opacity: 1;
  margin-top: 20px;
}
@media screen and (min-width: 53em) {
  .frame {
    text-align: left;
    z-index: 10000;
    top: 0;
    left: 0;
    display: grid;
    align-content: space-between;
    width: 100%;
    max-width: none;
    height: 100vh;
    padding: 2rem;
    pointer-events: none;
    grid-template-columns: 75% 25%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title links"
      "... ..."
      "tip ...";
  }
  .frame__title-wrap {
    grid-area: title;
    display: flex;
  }
  .frame__title {
    margin: 0;
  }
  .frame__tagline {
    position: relative;
    margin: 0;
    padding: 0 0 0 1rem;
  }
  .frame__tagline::before {
    content: "-------------";
    letter-spacing: -0.15rem;
    margin: 0 1rem 0 0;
  }
  .frame__tip {
    grid-area: tip;
    margin: 0;
  }
  .frame__demos {
    margin: 0;
    grid-area: demos;
    justify-self: end;
  }
  .frame__links {
    grid-area: links;
    padding: 0;
    justify-self: end;
  }
  .frame a {
    pointer-events: auto;
  }
  .content {
    height: 100vh;
    justify-content: center;
  }
  .cursor {
    display: block;
  }
}
@media (max-width: 2000px) {
  .menu__icon {
    position: fixed;
    z-index: 999999999999;
  }
  .frame {
    position: fixed;
  }
}
@media (max-width: 500px) {
  .nav__links {
    padding-top: 3.5vh;
  }
  #mySidenav small {
    font-size: 21px;
  }
  .nav__links {
    padding-left: 12vw;
  }
  .slide-title h1 {
    word-spacing: 100vw;
  }
}
@media (max-width: 920px) and (orientation: landscape) {
  .slide h1 {
    font-size: 42px;
    overflow: unset;
  }
  .sidenav .nav__links a {
    font-size: 2.7vw;
  }
  .logo {
    left: 21px;
  }
  .slide-more {
    padding: 5px 25px;
    left: 8px;
    position: relative;
  }
  #pageContent .pagination {
    display: none;
  }
  .menu__icon {
    right: 20px;
    top: 10px;
  }
  .frame .logo {
    position: absolute;
    top: 5px;
    left: -25px;
    z-index: 100;
  }
  .bottom__links {
    bottom: 20px;
  }
  .slide {
    height: auto !important;
    margin-top: 15px;
  }
  .slide .slide-meta {
    padding-bottom: 20px;
  }
  .slide h1 {
    padding-bottom: 20px;
  }
  .sidenav.openedDesktop {
    width: 100vw;
  }
  .mobile__home__message {
    display: block;
    position: fixed;
    z-index: 99;
    bottom: 15%;
    width: 100%;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bold;
    background: #00000000;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    text-align: left;
    padding: 0 80px;
  }
  .mobile__home__message p {
    font-weight: 900;
    margin: 0;
    -webkit-animation: 0;
    animation: 0;
    padding: 2px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "MarkPro-Book";
  }
}
@media (max-width: 568px) and (orientation: landscape) {
  .mobile__home__message {
    bottom: 11%;
    padding: 0 66px;
  }
}
</style>
<style scoped>
@media (max-width: 500px) {
  .section__wrapper,
  #app,
  body {
    position: fixed;
    z-index: 10;
    overflow: hidden !important;
    overscroll-behavior-y: contain !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html,
  body {
    overflow: hidden !important;
    overscroll-behavior-y: contain !important;
  }
}
</style>
