<template>
  <div id="app" :key="loadState">
    <SweepCourtain :key="componentKeyCourtain"></SweepCourtain>
    <NewLoader></NewLoader>
    <!-- Next loader component its not being used -->
    <Loader :key="componentKeyLoader"></Loader>
    <!-- End of unused component -->
    <Header :key="componentKey"></Header>
      <transition name="fade">
        <router-view  />
      </transition>
    <CustomCursor :key="componentKeyCursor"></CustomCursor>
  </div>
</template>
<script>
// @ is an alias to /src
import CustomCursor from "@/components/cursor.vue";
import Header from "@/components/header.vue";
// THIS LOADER BELOW ITS NOT BEING USED //
import Loader from "@/components/loader/loader";
// THIS LOADER ABOVE ITS NOT BEING USED //
import NewLoader from "@/components/loader/newLoader";
//import SweepCourtain from "@/components/loader/sweepCourtain";
const SweepCourtain = () => import("@/components/loader/sweepCourtain");

export default {
  components: {
    CustomCursor,
    Header,
    Loader,
    NewLoader,
    SweepCourtain,
  },
  data() {
    return {
      loadState:  false, 
      componentKey: 0,
      componentKeyCursor: 100,
      componentKeyLoader: 200,
      componentKeyCourtain: 300,
    };
  },
  watch:{
    $route (to, from){

       setTimeout(function(){ 
          if(this.$route.path === '/'){}else{
            document.querySelector('.cursor').classList.remove('its__home');
          }
       }.bind(this), 1000);

        setTimeout(function(){ 
          window.scroll({
            top: 0, 
            left: 0,  
          });
        }, 1000);

        this.forceRerenderCourtain();
        this.forceRerenderCursor();
        document.body.style.overflow = 'auto';

        // Remove animations from sidebar on start
        setTimeout(function(){ 
          [...document.querySelectorAll('#mySidenav .aos-init')].forEach(element => {
              element.classList.remove('aos-animate');
          });
        }, 2000);

        // Close navbar clicking outside
        document.querySelector('.section__wrapper').addEventListener('click', function(){
          if(document.querySelector('.openedDesktop')){
            document.querySelector('.sidenav').classList.remove('openedDesktop');
            document.querySelector('.section__wrapper').classList.remove('active');
          }
        })
    }
  }, 
  methods: {
    forceRerender() {
      this.componentKey += 1;  
    },
    forceRerenderCourtain() {
      this.componentKeyCourtain += 1;  
    },
    forceRerenderCursor() {
      this.componentKeyCursor += 1;  
    },
    removeSidebar(){
      // Close navbar clicking outside
      document.querySelector('.section__wrapper').addEventListener('click', function(){
      if(document.querySelector('.openedDesktop')){
        document.querySelector('.sidenav').classList.remove('openedDesktop');
        document.querySelector('.section__wrapper').classList.remove('active');
      }
      })
    }
  },
  mounted(){

    // Set menu first Stage
    var menuName = document.querySelector('.menu__icon i');
    document.querySelector('.menu__icon').classList.add('pill__menu');
    menuName.classList.add('menu__name');
    menuName.addEventListener("click", function() {
       menuName.classList.remove('menu__name'); 
       document.querySelector('.menu__icon').classList.remove('pill__menu');
    }, false);
    

    // Remove animations from sidebar on start
    setTimeout(function(){ 
      [...document.querySelectorAll('#mySidenav .aos-init')].forEach(element => {
          element.classList.remove('aos-animate');
      });
    }, 2000);

    // Close navbar clicking outside
    document.querySelector('.section__wrapper').addEventListener('click', function(){
      if(document.querySelector('.openedDesktop')){
        document.querySelector('.sidenav').classList.remove('openedDesktop');
        document.querySelector('.section__wrapper').classList.remove('active');
      }
    })

    // Menu Cursor changer
    var logo = [...document.querySelectorAll('.logo')];
    var menu = [...document.querySelectorAll('.menu__icon')];     
    var buttons = [...document.querySelectorAll('.lc button')]; 
    var aLinks = [...document.querySelectorAll('.contact__info a')]; 
    var inputElements = [...document.querySelectorAll('input')]; 
    var otherElements = [...document.querySelectorAll('.team-overlay')]; 
    var allElements = logo.concat(menu).concat(buttons).concat(aLinks).concat(inputElements).concat(otherElements);

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


  },

};

</script>

<style>

*::-webkit-scrollbar {
    display: none!important;
}
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .5s;
  transition-delay: 0.5s!important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
*, *:hover, *:focus {
    outline: none!important;
    text-decoration: none!important;
    box-shadow: none!important;
}
a:hover, a:focus{
  color: #d13368!important;
}
input:focus{
  outline: none!important;
  box-shadow: none!important;
}
a{
  color: white!important;
  transition: color ease 0.5s;
}
/* Transition */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

body {
	font-family: 'MarkPro_1', sans-serif;
	font-weight: normal;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background: black;
  cursor: none!important;
}
.body__wrapper{
  transition: opacity 0.7s ease-in-out;
}
.body__wrapper.fade__out{
  opacity: 0;
}
h1, h2, h3, h4, h5, h6{
  pointer-events: none;
}
div{box-sizing: border-box;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


@media (max-width: 768px) {
  .cursor{
    display: none;
  }
}
.black-icon .menu__name, .scrolling .menu__name{
  border: solid 2.3px white!important;
}
input, button, a{
  cursor: none!important;
}
.section__wrapper{
  position: relative;
  z-index: 10;
}
.section__wrapper.active{
  overflow: hidden;
}
.section__wrapper.active:before{
  content: "";
  width: 100%;
  height: 200vh;
  background: #0000004d;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  animation: show-overlay  forwards 0.3s;
}
@keyframes show-overlay {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.section__wrapper:before{
  opacity: 0;
  transition: opacity ease-in-out 0.3s ;
}
.section__wrapper{
  transition: opacity ease-in-out 0.3s ;

}
</style>
