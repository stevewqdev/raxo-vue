/* eslint-disable */
<template>
    <div id="mySidenav" class="sidenav">
        <!--<p @click="toggleNavbar" class="closebtn" id="menuControlClose">&times;</p>-->
        <div class="nav__links">
            <!--
            <p data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="300"><small>Categories</small></p>
            -->
            <router-link class="nav-link" to="/" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                Home
            </router-link>
            
            <!--<a href="https://raxo.tv/creative-work/" class="nav-link" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
            Work 
            </a>-->
            <router-link class="nav-link" to="/work" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                Work
            </router-link>
            <router-link class="nav-link" to="/about" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                About
            </router-link>
            <router-link class="nav-link" to="/team" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                Team
            </router-link>
                <router-link class="nav-link" to="/contact" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                Contact
            </router-link>
        </div>
        <div class="bottom__links">
            <a href="https://www.facebook.com/raxo.studio/" target="_BLANK" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">Facebook</a>
            <a href="https://www.instagram.com/raxo/" target="_BLANK" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">Instagram</a>
            <a href="https://vimeo.com/raxo" target="_BLANK" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">Vimeo</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: "Sidenav",
  props: {
    msg: String
  },

  computed:{
      gallery(){
          return this.$route.path === '/gallery'
      },
      contact(){
          return this.$route.path === '/contact'
      }
  },
  mounted() {
    window.document.addEventListener('click', this.onClickApp);
    // if(this.$route.path === '/'){
    //     document.querySelector('#mySidenav').addEventListener('mouseenter', function(){
    //         document.querySelector('.cursor').classList.remove('its__home');
    //         document.querySelector('.cursor').classList.add('nav__open__cursor');
    //     });
    //     document.querySelector('#mySidenav').addEventListener('mouseleave', function(){
    //         document.querySelector('.cursor').classList.add('its__home');
    //         document.querySelector('.cursor').classList.remove('nav__open__cursor');
    //     });
    // }
    var listElements = [...document.querySelectorAll('.nav__links a')]; 
    var bottomLinks = [...document.querySelectorAll('.bottom__links a')]; 
    var allElements = listElements.concat(bottomLinks);
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
  }
};

</script>