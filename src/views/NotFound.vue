<template>
        <div class="section__wrapper body__wrapper not__found">
            <div class="container">
              <h1 class="error__404--title"> 
                <span data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom" class="error__404">404</span> <br>
                <span data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom">Whoops! </span> <br> 
                <span data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">It seems like we couldn't find the page you were looking for</span>
              </h1>
              <router-link class="nav-link" to="/" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                  <button class="slide-more error__404 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">Go back home</button>
              </router-link>
            </div>

        </div>
</template>


<script>
import AOS from "aos";


export default {
  components: {

  },
  methods: {
	animateLoader(){
		// First Animation Batch
		document.querySelector('.loader__screen').classList.add('start__animation');
		document.querySelector('.loader__screen .right__bar').classList.add('first__animation__sideblock');
		//document.querySelector('.loader__wrapper').classList.add('first__loader__gif');
    },
	removeLoader(){
		// Second Animation Batch
		document.querySelector('.loader__screen').classList.remove('start__animation');
		document.querySelector('.loader__screen').classList.add('end__loader');
	},
  },
  mounted(){
    AOS.init({disable: 'mobile',anchorPlacement: 'top-bottom',});	
    // hide loading screen
    document.querySelector('.loader__screen').style.display = 'none';
    var logo = [...document.querySelectorAll('.logo')];
    var menu = [...document.querySelectorAll('.menu__icon')]; 
    var bottomLinks = [...document.querySelectorAll('.bottom__links a')]; 
    var listElements = [...document.querySelectorAll('.nav__links a')]; 
    var buttons = [...document.querySelectorAll('.lc button')]; 
    var aLinks = [...document.querySelectorAll('.contact__info a')]; 
    var inputElements = [...document.querySelectorAll('input')]; 
    var otherElements = [...document.querySelectorAll('.team-overlay')]; 
    var buttons = [...document.querySelectorAll('button')]; 
    var allElements = logo.concat(menu).concat(bottomLinks).concat(listElements).concat(buttons).concat(aLinks).concat(inputElements).concat(otherElements).concat(buttons);
    
    allElements.forEach(function(element) {
      element.addEventListener("mouseenter", function() {
        var theCursor = document.querySelector('.cursor')
        theCursor.classList.add('morphed--cursor');
      });
      element.addEventListener("mouseleave", function() {
        var theCursor = document.querySelector('.cursor')
        theCursor.classList.remove('morphed--cursor');
      });
    })

    // Mixing cursor with 404 error
    var allElements = [...document.querySelectorAll('.error__404--title')]; 
    allElements.forEach(function(element) {
      element.addEventListener("mouseenter", function() {
        var theCursor = document.querySelector('.cursor__inner--dot')
        theCursor.classList.add('custom-mix-cursor');
      });
      element.addEventListener("mouseleave", function() {
        var theCursor = document.querySelector('.cursor__inner--dot')
        theCursor.classList.remove('custom-mix-cursor');
      });
    })

    this.animateLoader();
    setTimeout(function() { 
      this.removeLoader();
    }.bind(this), 
    0);

    document.querySelector('.cursor p small').innerHTML = 'VIEW';

    [...document.querySelectorAll('.logo__black')][0].classList.remove('show__logo');
    [...document.querySelectorAll('.logo__white')][0].classList.add('show__logo');
    // Change cursor on hover the projects
    var projects =  [...document.querySelectorAll('.the__project')];

    projects.forEach(function(project) {
        project.addEventListener("mouseenter", function() {
            var cursor = document.getElementById('cursor');
            cursor.classList.add('hover-cursor');
        });
        project.addEventListener("mouseleave", function() {
            var cursor = document.getElementById('cursor');
            cursor.classList.remove('hover-cursor');
        });
    });

    // Close navbar clicking outside
	document.querySelector('.section__wrapper').addEventListener('click', function(){
		if(document.querySelector('.openedDesktop')){
			document.querySelector('.sidenav').classList.remove('openedDesktop');
            document.querySelector('.section__wrapper').classList.remove('active');
            document.body.style.overflow = 'auto';
		}
	})
  }
};
</script>
<style scoped>
.not__found{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: black;
  flex-direction: column;
}
.not__found h1 .error__404{
  font-size: 3.5em;
}
.not__found .slide-more{
  margin-top: 20px;
}

</style>
<style >
  .custom-mix-cursor{
    mix-blend-mode: darken;
    width: 52px!important;
    height: 52px!important;
    background: linear-gradient(to bottom, #d13368, #6e07ea)!important;
  }
  
</style>