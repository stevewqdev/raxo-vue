<template>
    <div class="loader__screen__courtain">
        <div class="right-layer right-layer--1"></div>
        <div class="right-layer right-layer--2"></div>
        <div class="right-layer right-layer--3"></div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "SweepCourtain",
  methods: {
    renderCourtain(){
        // Hide cursor and menu while sweep its happening
        document.querySelector('.cursor').style.zIndex = '0';
        document.querySelector('.menu__icon').style.opacity = '0';
        
        setTimeout(function(){ 

            // We make sweep happening
            var layerClass = ".right-layer";
            var layers = document.querySelectorAll(layerClass);
            for (const layer of layers) {
                layer.classList.toggle("active");
            }
            setTimeout(function(){ 
                // We close the menu after page changing
                document.querySelector('.sidenav').classList.remove('openedDesktop');

            }, 400);
            setTimeout(function(){
                // Show back the cursor and the menu
                document.querySelector('.cursor').style.opacity = '1';
            }, 600);
            setTimeout(function(){
                document.querySelector('.menu__icon').style.opacity = '1';
            }, 1500);
        }, 0.1);

    },
  },
  mounted(){
    this.renderCourtain();
      
  },
};

</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
}
.right-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: auto;
  left: 100%;
  bottom: auto;
  right: auto;
  background: #d13368;
  transition: left 1s ease-in-out!important;
  opacity: 0;
}
.right-layer.active {
  left: -100%;
  opacity: 1;
}
.right-layer--2 { 
  background: #d13368;
  transition-delay: 0.3s!important;
}
.right-layer--3 {
  background: #d13368;
  transition-delay: 0.2s!important;
}
.loader__screen__courtain{
    position: fixed;
    z-index: 9999999999999;
    width: 100%;
    height: 100vh;
    pointer-events: none;
}
</style>