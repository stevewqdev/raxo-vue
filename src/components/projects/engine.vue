<template>
  <div
    class="project__wrapper project__block project__component section__wrapper project__internal__page"
  >
    <Header />
    <title>Engine Shop | Design Branding Web Development Work</title>
    <meta
      name="description"
      content="Our Work Portfolio - Engine Shop. They came to Raxo for Design, Branding and Web Development. We fulfilled their requirements within a specific  timeline. Contact us today at 646-838-4583!"
    />
    <div class="home-page dark-logo">
      <div class="home-page-3-overlay light"></div>
      <div class="center-container">
        <div class="center-block">
          <h1 class="home-page-title light">
            <img
              data-aos="fade-in"
              data-aos-duration="2000"
              :src="require('@/assets/projects/img/logo-2.png')"
            />
          </h1>
          <p class="banner-slogon-text">Design. Branding. Web Development.</p>
        </div>
      </div>
    </div>
    <section
      class="parallax-window engine-fondo"
      data-parallax="scroll"
      data-image-:src="require('@/assets/projects/img/3-page-bg.jpg"
    >
      <div class="center-container">
        <div class="center-block">
          <h1 class="paralax">Engagement</h1>
        </div>
      </div>
    </section>
    <section class="section-3">
      <div class="cont-1 container" data-aos="fade-in" data-aos-duration="2000">
        <div class="row">
          <div class="col-md-1 col-md-offset-2">
            <p><b>Who:</b></p>
          </div>
          <div class="col-md-7">
            <p>Engine Shop</p>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-1 col-md-offset-2">
            <p><b>What:</b></p>
          </div>
          <div class="col-md-7">
            <p>
              Engine Shop specializes in helping brands connect with consumers
              online and in-person through live experiences, digital engagement
              and original and branded content. Engine Shop came to RAXO looking
              to refresh its visual identity in order to support its growing
              leadership in the engagement marketing world. After an extensive
              analysis of Engine Shop’s core ideals, RAXO commenced work on a
              comprehensive update of the company’s logo, brand guidelines, and
              new business collateral, implementing a fresh approach to
              typography and color.
            </p>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-1 col-md-offset-2">
            <p><b>Where:</b></p>
          </div>
          <div class="col-md-7">
            <p>Design. Branding. Web Development.</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-4"
      style="background-color:black;height: 100%;background-size: cover;background-position: center center;"
    >
      <div class="center-container">
        <div class="center-block">
          <h1 data-aos="slide-up" data-aos-duration="2000" class="logo-head">
            <img :src="require('@/assets/projects/img/text-logo.png')" />
          </h1>
        </div>
      </div>
    </section>
    <div class="clearfix"></div>
    <section
      class="section-5  parallax-window engine-fondo2"
      data-parallax="scroll"
      style="background: url(@/assets/projects/img/3-page-bg-2.png);"
      data-image-:src="require('@/assets/projects/img/3-page-bg-2.png')"
    ></section>
    <div class="clearfix"></div>
    <section class="new-section-1">
      <div class="container">
        <div class="row">
          <div
            class="col-md-10 col-md-offset-1"
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 class="bg-text-c">
              #Convention #Festival <br />
              #WebDesign #People <br />
              #Responsive #Digital <br />
              #NewYork #Convention <br />
              #Movement #Sustainable
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="new-section-2" style="background:#000000; padding:100px 0;">
      <div class="container" data-aos="fade" data-aos-duration="3000">
        <div class="row">
          <div class="col-md-8">
            <img :src="require('@/assets/projects/img/line-bar.png')" /
            class="lazyload">
          </div>
          <div class="new-col-2 col-md-4">
            <div class="pull-left back-curl-icon back-curl-icon-top">
              <h1>
                Mobile<br />
                Site
              </h1>
              <p>SCREENSHOTS</p>
            </div>
          </div>
        </div>
        <div
          id="mobanimation"
          class="row"
          onmousewheel="toggleClass(this, 'pic_translate')"
        >
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="mobile-new-box">
              <center>
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  :src="require('@/assets/projects/img/mobile1.png')"
                  class="lazyload"
                  alt=""
                />
              </center>
              <div
                class="mobile-box-content bottom-content-right-2 light-text red-crcl back-curl-icon"
              >
                <h2>MENU</h2>
                <p>
                  Large text was used to easily translate the menu from desktop
                  to mobile.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 hide-on-mobile">
            <div class="mobile-new-box">
              <center>
                <img
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  class="show-on-mobile lazyload"
                  :src="require('@/assets/projects/img/mobile2.png')"
                  alt=""
                  style="margin-top: 100px;"
                />
              </center>
              <div
                class="mobile-box-content content-box-top light-text red-crcl"
              >
                <h2>WHAT WE DO</h2>
                <p>
                  RAXO used iconography and imagery to visually display what
                  exactly EngineShop does.
                </p>
              </div>
              <center>
                <img
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  class="hide-on-mobile lazyload"
                  :src="require('@/assets/projects/img/mobile2.png')"
                  alt=""
                  style="margin-top: 100px;"
                />
              </center>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="mobile-new-box">
              <center>
                <img
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  :src="require('@/assets/projects/img/mobile3.png')"
                  class="lazyload"
                  alt=""
                />
              </center>
              <div
                class="mobile-box-content bottom-content-left light-text red-crcl back-curl-icon back-curl-icon-slash"
              >
                <h2>CASE STUDIES</h2>
                <p>
                  Large imagery was used on the case studies to clearly display
                  work done by EngineShop.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 show-on-mobile">
            <div class="mobile-new-box">
              <center>
                <img
                  class="lazyload show-on-mobile"
                  :src="require('@/assets/projects/img/mobile2.png')"
                  alt=""
                  style="margin-top: 20px;"
                />
              </center>
              <div
                class="mobile-box-content content-box-top light-text red-crcl"
              >
                <h2>WHAT WE DO</h2>
                <p>
                  RAXO used iconography and imagery to visually display what
                  exactly EngineShop does.
                </p>
              </div>
              <center>
                <img
                  class="lazyload hide-on-mobile engine-img2"
                  :src="require('@/assets/projects/img/mobile2.png')"
                  alt=""
                  style="margin-top: 100px;"
                />
              </center>
            </div>
          </div>
          <div class="col-xs-12">
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
    <section class="new-section-3">
      <div class="container">
        <h1>Desktop</h1>
        <img
          :src="require('@/assets/projects/img/lcd.png')"
          class="lazyload lcd"
        />
      </div>
    </section>
    <section
      class="new-section-4 parallax-window engine-fondo3"
      data-parallax="scroll"
      data-image-:src="require('@/assets/projects/img/3-page-bg-7.png"
    ></section>
    <section class="section-7 engine-web">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8" data-aos="fade-right" data-aos-duration="2000">
            <center>
              <img
                :src="require('@/assets/projects/img/EngineShop-FINAL.png')"
                style="width:100%"
                class="lazyload head-bar img-responsive"
              />
            </center>
          </div>
          <div class="sec-head col-md-3" data-aos="fade-out">
            <h1 style="color:#d7262e;" class="web section-side-heading">
              Website
            </h1>
            <h4 class="pro">CASE STUDIES</h4>
            <span class="box"></span>
            <p class="para">
              Throughout the website, RAXO used large iconography and imagery to
              clearly show the compelling work of EngineShop.
            </p>
            <div
              class="circle-1"
              data-aos="slide-right"
              data-aos-duration="5000"
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="big-circle col-md-4 hidden-xs hidden-sm">
            <div
              class="circle-2"
              data-aos="slide-right"
              data-aos-duration="2000"
            ></div>
          </div>
          <div class="col-md-8" data-aos="fade-left" data-aos-duration="2000">
            <center>
              <img
                :src="
                  require('@/assets/projects/img/EngineShop-FINAL-Copy.png')
                "
                style="width:100%"
                class="lazyload head-bar img-responsive"
              />
            </center>
          </div>
        </div>
        <div class="row">
          <div
            class="sec-head col-md-3 hidden-md hidden-lg"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <h4 class="pro">TEAM</h4>
            <div
              class="circle-3"
              data-aos="slide-right"
              data-aos-duration="2000"
            ></div>
          </div>
          <div
            class="col-md-8 hide-on-mobile"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <center>
              <img
                :src="
                  require('@/assets/projects/img/EngineShop_FINAL-Copy_two.png')
                "
                style="width:100%"
                class="lazyload head-bar img-responsive  "
              />
            </center>
          </div>
          <div
            class="sec-head col-md-3 hidden-sm hidden-xs"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <h4 class="pro">TEAM</h4>
            <div
              class="circle-3"
              data-aos="slide-right"
              data-aos-duration="2000"
            ></div>
          </div>
          <div
            class="col-md-8 show-on-mobile"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <center>
              <img
                :src="
                  require('@/assets/projects/img/EngineShop_FINAL-Copy_two.png')
                "
                style="width:100%"
                class="lazyload head-bar img-responsive  "
              />
            </center>
          </div>
        </div>
        <div class="row">
          <div
            class="sec-head col-md-3 col-md-offset-1"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <h4 class="pro">INFORMATION</h4>
            <div
              class="circle-4"
              data-aos="slide-right"
              data-aos-duration="2000"
            ></div>
          </div>
          <div
            class="col-md-8 hide-on-mobile"
            data-aos="fade-left"
            data-aos-duration="2000"
            style="padding-bottom: 70px; "
          >
            <center>
              <img
                :src="
                  require('@/assets/projects/img/EngineShop_FINAL-Copy_three.png')
                "
                style="width:100%"
                class="lazyload head-bar img-responsive"
              />
            </center>
          </div>
          <div
            class="col-md-8 show-on-mobile"
            data-aos="fade-left"
            data-aos-duration="2000"
            style="padding-bottom: 70px; "
          >
            <center>
              <img
                :src="
                  require('@/assets/projects/img/EngineShop_FINAL-Copy_three.png')
                "
                style="width:100%"
                class="lazyload head-bar img-responsive"
              />
            </center>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-8 parallax-window engine-fondo4"
      data-parallax="scroll"
      data-image-:src="require('@/assets/projects/img/EngineShop-FINAL-bg.png"
    ></section>
    <div class="clearfix"></div>
    <section
      class="section-9-1 parallax-window engine-fondo5"
      data-parallax="scroll"
      data-image-:src="require('@/assets/projects/img/3-page-last.png"
    ></section>
    <Footer
      prev="hugo-boss-design-animation"
      next="lufthansa-creative-design-web-development"
    ></Footer>
  </div>
</template>
<style scoped>
.section-4 {
  height: 800px !important;
}
</style>
<script>
const Footer = () => import("../projects/template-parts/footer");
const Header = () => import("../projects/template-parts/header");
export default {
  name: "Engine",
  components: {
    Footer,
    Header
  },
  mounted() {
    mixpanel.track("Engine Shop | Design Branding Web Development Work");

    mixpanel.track_links("#mySidenav a", "Clicked main menu link", {
      referrer: document.referrer
    });
  }
};
</script>
