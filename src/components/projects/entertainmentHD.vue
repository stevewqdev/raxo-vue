<template>
  <div
    class="project__wrapper project__block project__component section__wrapper project__internal__page"
  >
    <Header />
    <title>BBC HD | Design Branding Animation Work</title>
    <meta
      name="description"
      content="Our Work Portfolio - BBC HD - a part of the BBC family. They came to Raxo for Design, Branding and Animation. We fulfilled requirements within timeline. Contact us today at 646-838-4583!"
    />
    <div class="home-page dark-logo">
      <div class="home-page-20-overlay light"></div>
      <div class="center-container">
        <div class="center-block">
          <h1
            class="home-page-10-title light aos-init aos-animate"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            High Definition
          </h1>
          <p class="banner-slogon-text" style="color:#000000;">
            Design. Branding. Animation.
          </p>
        </div>
      </div>
    </div>

    <section class="section-3">
      <div class="cont-1 container">
        <div class="row" data-aos="fade-in" data-aos-duration="2000">
          <div class="col-md-1 col-md-offset-2">
            <p><b>Who:</b></p>
          </div>
          <div class="col-md-7">
            <p>BBC HD</p>
            <br />
          </div>
        </div>
        <div class="row" data-aos="fade-in" data-aos-duration="2000">
          <div class="col-md-1 col-md-offset-2">
            <p><b>What:</b></p>
          </div>
          <div class="col-md-7">
            <p>
              One of our most beloved clients, BBC, came to us with the
              challenge rebranding elements of the network. With this project,
              we worked closely with their creative team to come up with a new
              color palette, typography, transitions, backgrounds, bumpers and
              more. Every detail complements the BBC imagery and redefined its
              aesthetics.
            </p>
            <br />
          </div>
        </div>
        <div class="row" data-aos="fade-in" data-aos-duration="2000">
          <div class="col-md-1 col-md-offset-2">
            <p><b>Where:</b></p>
          </div>
          <div class="col-md-7">
            <p>Design. Branding. Animation.</p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="parallax-window bbchd-video"
      data-parallax="scroll"
      data-image-src="assets/img/gfg.png"
    >
      <div class="center-container">
        <div class="center-block vidbtn">
          <center>
            <a
              href="javascript:;"
              class="js-video-button"
              data-video-id="120364515"
              data-channel="vimeo"
            >
              <svg
                version="1.1"
                id="btnplay_white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 70.5 19.3"
                style="enable-background:new 0 0 70.5 19.3;"
                xml:space="preserve"
              >
                <g>
                  <path
                    class="st0"
                    d="M0,0h8.9c1.2,0,2.3,0.2,3.2,0.5c0.9,0.3,1.7,0.7,2.3,1.3C15.1,2.4,15.6,3.1,16,4s0.6,1.8,0.6,2.9
                                    c0,0.9-0.2,1.8-0.5,2.6c-0.3,0.8-0.8,1.5-1.4,2.1c-0.6,0.6-1.3,1-2.1,1.4s-1.7,0.5-2.7,0.5H5.6v5.9H0V0z M5.6,9h3.1
                                    c0.7,0,1.2-0.2,1.6-0.6c0.4-0.4,0.6-1,0.6-1.6c0-0.6-0.2-1.2-0.6-1.6c-0.4-0.4-1-0.6-1.7-0.6h-3V9z"
                  />
                  <path class="st0" d="M18.7,0h5.6v14.5h8.3v4.8H18.7V0z" />
                  <path
                    class="st0"
                    d="M41,0h5.8l7.2,19.3h-6L47,16.5h-6.5l-0.9,2.8h-5.6L41,0z M41.7,12.6h4l-1.2-3.8c-0.2-0.5-0.3-1-0.5-1.6
                                    c-0.1-0.3-0.2-0.6-0.2-0.9h-0.1c-0.1,0.3-0.2,0.6-0.2,0.9c-0.1,0.6-0.3,1.1-0.5,1.6L41.7,12.6z"
                  />
                  <path
                    class="st0"
                    d="M58.2,12.5L51.6,0h6.1l2.1,4.3c0.2,0.4,0.3,0.7,0.5,1.1c0.2,0.4,0.3,0.7,0.4,1c0.1,0.3,0.3,0.7,0.4,1h0.1
                                    c0.1-0.3,0.3-0.7,0.4-1c0.1-0.3,0.3-0.6,0.4-1c0.2-0.4,0.3-0.7,0.5-1.1L64.5,0h6l-6.6,12.5v6.8h-5.6V12.5z"
                  />
                </g>
              </svg>
            </a>
          </center>
        </div>
      </div>
    </section>
    <section class="new-section-20-1">
      <div class="container-fluid">
        <div class="row" style="margin-top:10%;">
          <div class="col-md-3 col-md-offset-1">
            <h1>Design<br />Package</h1>
          </div>
          <div class="col-md-5">
            <p>
              We created a full package of endboards, backgrounds, menus,<br />
              and previews to help the viewer have a seamless viewing <br />
              experience while tuning into BBC HD. See below! <br />
            </p>
          </div>
          <div class="col-md-3">
            <img
              :src="require('@/assets/projects/img/big-arrow.png')"
              style="width: 84px;margin-left:30px;"
            />
          </div>
        </div>
      </div>
    </section>

    <!--
<section>
<img :src="require('@/assets/projects/img/15-page-3.png')" width = "100%" class = "img-responsive lazyload"/>
</section>
-->

    <section class="new-section-20-2">
      <div class="container-fluid">
        <div class="row">
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-1.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-2.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>

        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-4">
            <img
              :src="require('@/assets/projects/img/bbc-3.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-8">
            <img
              :src="require('@/assets/projects/img/bbc-4.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>

        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-8">
            <img
              :src="require('@/assets/projects/img/bbc-5.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-4">
            <img
              :src="require('@/assets/projects/img/bbc-6.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="new-section-5-2">
      <div class="container">
        <div
          class="col-md-12"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h3 class="white-para">
            We wanted to keep it simple, we didn’t want to drive the attention
            from the images away from each show. A dark background with the
            lettering in the background makes for a good visual balance
            <font></font>
          </h3>
          <!--
  </div-->
        </div>
      </div>
    </section>

    <section>
      <div class="new-section-20-2">
        <div class="row">
          <div class="new-col-12-1 img-col col-md-4">
            <img
              :src="require('@/assets/projects/img/bbc-7.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-8">
            <img
              :src="require('@/assets/projects/img/bbc-8.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-9.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-10.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>

        <div class="row" style="margin-top:10px;">
          <img
            :src="require('@/assets/projects/img/bbc-hd.gif')"
            width="100%"
            class="img-responsive lazyload"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="new-section-20-2">
        <div class="row">
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-11.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-12.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-4">
            <img
              :src="require('@/assets/projects/img/bbc-13.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-8">
            <img
              :src="require('@/assets/projects/img/bbc-14.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-4">
            <img
              :src="require('@/assets/projects/img/bbc-15.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-8">
            <img
              :src="require('@/assets/projects/img/bbc-16.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-17.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
          <div class="new-col-12-1 img-col col-md-6">
            <img
              :src="require('@/assets/projects/img/bbc-18.jpg')"
              width="100%"
              class="img-responsive lazyload"
            />
          </div>
        </div>
      </div>
    </section>
    <Footer
      prev="bbc-entertainment-cbeebies-creative"
      next="sambazon-design-animation"
    ></Footer>
  </div>
</template>
<style>
.new-section-20-1 {
  background: #111111;
  height: auto;
  padding-top: 15%;
  padding-bottom: 3%;
}
.new-section-20-1 h1 {
  color: #9ec7b9;
  font-size: 62px;
}
.new-section-20-1 p {
  color: #fff;
  font-size: 12.7pt;
  margin-top: 51px;
}
.new-section-20-2 {
  background-color: #fff;
  padding-top: 10px;
}
.new-section-5-2 h3 font:before {
  background: #9ec7b9;
}
</style>
<script>
const Footer = () => import("../projects/template-parts/footer");
const Header = () => import("../projects/template-parts/header");

export default {
  name: "EntertainmentHd",
  components: {
    Footer,
    Header
  },
  mounted() {
    mixpanel.track("BBC HD | Design Branding Animation Work");

    mixpanel.track_links("#mySidenav a", "Clicked main menu link", {
      referrer: document.referrer
    });
  }
};
</script>
