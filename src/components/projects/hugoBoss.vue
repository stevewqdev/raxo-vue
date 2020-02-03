<template>
	<div class="project__wrapper">
    <title>Hugo Boss | Design Animation Work</title>
<meta name="description" content="Our Work Portfolio - Hugo Boss. They came to Raxo for Design & Animation. We fulfilled their requirements within a specific timeline. Contact us today at 646-838-4583!">
		<div class="home-page dark-logo">
  <div class="home-page-5-overlay light"></div>
  <div class="center-container">
    <div class="center-block">
      <h1 class="home-page-5-title light" data-aos="fade-in" data-aos-duration="2000"> 
        <span><span class = "hugo-boss"></span>
        <center>
          <img class="img-responsive lazyload " style="max-width:450px; width:60%;" :src="require('@/assets/projects/img/boss-logo.png')" alt="">
        </center>
        </span> </h1>
      <p class="banner-slogon-text">Design. Animation.</p>
    </div>
  </div>
</div>
<section class="parallax-window hugo-fondo1 lazyload" data-parallax="scroll" data-image-:src="require('@/assets/projects/img/5-page-1.jpg" >
  <div class="center-container">
    <div class="center-block">
      <h1 class="paralax">PerfectSuit</h1>
    </div>
  </div>
</section>
<section class = "section-3">
  <div class="cont-1 container">
    <div class="row" data-aos="fadeIn" data-aos-duration="2000">
      <div class="col-md-1 col-md-offset-2">
        <p><b>Who:</b></p>
      </div>
      <div class="col-md-7">
        <p>Hugo Boss </p>
        <br>
      </div>
    </div>
    <div class="row" data-aos="fadeIn" data-aos-duration="2000">
      <div class="col-md-1 col-md-offset-2">
        <p><b>What:</b></p>
      </div>
      <div class="col-md-7">
        <p>Hugo Boss, the luxury fashion house, introduced separates as a new option for their customers. Separates allow customers to customize the suit they want by combining different fits, sizes and colors of jackets and pants to best suit their body type. With the launch, Hugo Boss was looking for a unique and dynamic in-store tool. Partnering with Coloredge, RAXO provided a fully interactive touchscreen experience, featuring a responsive mannequin and social media/email integration. </p>
        <br>
      </div>
    </div>
    <div class="row" data-aos="fadeIn" data-aos-duration="2000">
      <div class="col-md-1 col-md-offset-2">
        <p><b>Where:</b></p>
      </div>
      <div class="col-md-7">
        <p>Design. Animation. </p>
      </div>
    </div>
  </div>
</section>  
<section class = "new-section-5-1 parallax-window hugo-fondo2 lazyload"  data-parallax="scroll" data-image-:src="require('@/assets/projects/img/5-page-2.jpg"> </section>
<section class = "new-section-5-2">
  <div class="container">
    <div class="col-md-12" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <h3 class = "white-para">Partnering with Coloredge, RAXO provided a fully interactive touchscreen experience, featuring a responsive mannequin  and social media/email integration <font></font> </h3>
    </div>
  </div>
</section>
<section class = "new-section-5-3 parallax-window hugo-fondo3 lazyload"  data-parallax="scroll" data-image-:src="require('@/assets/projects/img/5-page-3.jpg"> </section>
<section class 	= "new-section-5-4 w-no-bg hugo-responsive">
  <div class="row" >
    <div class="col-xs-12 col-sm-12 col-md-6">
      <h1 style="color:#151628;" class="section-side-heading">Responsive<br>
        Design</h1>
    </div>
    <div class="col-md-6">
      <div class = "half-circle"></div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <div class=" container">
    <div class="row" id="mobanimation" onmousewheel="toggleClass(this, 'pic_translate')">
      <div class="col-xs-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-duration="1000">
        <div class="mobile-new-box">
          <center>
            <img :src="require('@/assets/projects/img/mobile_1.png')" class="lazyload"  alt="">
          </center>
          <div class="mobile-box-content bottom-content-right-2 blue-crcl">
            <h2>find the perfect fit for your body</h2>
            <p>The user can select the perfect body type that will help them tailor their suit.</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="mobile-new-box">
          <center>
            <img :src="require('@/assets/projects/img/mobil_2.png')" alt="" class="lazyload" style = "margin-top:5vw;">
          </center>
          <div class="mobile-box-content bottom-content-right-2 blue-crcl">
            <h2>Tailored to fit closely to the body</h2>
            <p>With detail oriented selections, the user goes through different options for a fit that hugs the body the way that they want it to.</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4" data-aos="fade-up" data-aos-duration="2000">
        <div class="mobile-new-box mobile-centrado">
          <center>
            <img :src="require('@/assets/projects/img/mobile_3.png')" class="lazyload" alt="">
          </center>
          <div class="mobile-box-content bottom-content-right-2 blue-crcl">
            <h2>Choose your sport coat & Dress pant</h2>
            <p>With an aray of fits when it comes to suits, the user can customized how they want their sport coat and dress pant to fit. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-5"></div>
  </div>
</section>
<section class ="parallax-window hugo-fondo4"  data-parallax="scroll" data-image-:src="require('@/assets/projects/img/5-page-4.jpg"> </section>
<section class = "parallax-window hugo-fondo5"  style="background:url(assets/img/5-page-5.jpg);    background-size: cover;"></section>
<div class="clearfix"></div>

<Footer prev="rock-summer-is-an-initiative-started" next="engine-shop-branding-design-web-development" ></Footer>	
	</div>
</template>




<script>
import Footer from '../projects/template-parts/footer'

export default {
  name: "HugoBoss",
  components: {
    Footer,
  },
  mounted () {
    mixpanel.track("Hugo Boss | Design Animation Work");

    mixpanel.track_links("#mySidenav a", "Clicked main menu link", {
        "referrer": document.referrer
    });
  }
}
</script> 