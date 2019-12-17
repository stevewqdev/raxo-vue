<template>
    <div :class="classInfo">
      <router-link :to="'/creative-work/'+url">
        <!--
        <picture>
          <source :data-src="require('@/assets/project-thumbnails/'+image+'.webp')" :id="'eid-'+eid" class="webp__image" type="image/webp"> 
          <source :data-src="require('@/assets/project-thumbnails/'+image+'.jpg')" type="image/jpeg">-->
          <img :src="require('@/assets/project-thumbnails/'+image+'.jpg')" :data-webP="image"  />
        <!--</picture>-->
        <div class="content__wrapper">
          <h3 >{{title}}</h3>
          <h5>{{info}}</h5>  
        </div>
        <div class="inner__circle"></div>
        <div class="overlay"></div>
      </router-link>
    </div>
</template>
<script>
import AOS from "aos";

export default {
  name: 'Projects',
  data() {
    return {
      webpImage : '.jpg',
    }
  },
  // To use props, they must be declared
  props: {
    info: String,
    image: String,
    title: String,
    classInfo: String,
    url: String,
    eid: String, 
  },
  methods: {
    // swapForWebp(id) {
    //     var theId = id;
    //   setTimeout(function(){ 
    //     var jpgData = document.querySelector('.webp__image').dataset;
    //     var webData = jpgData.src.replace(/jpg/, 'webp'); 
    //     document.getElementById(`eid-${theId}`).dataset.src = webData;
    //   }, 3000);
    // } 
  },
  created(){
    //this.swapForWebp(this.$props.eid);
  },
  mounted(){
    
  }
}

</script>

<style >
  @media (max-width: 4000px){
    .the__project {
      height: 40vh;
    }
    .the__project h3 {
      font-size: 1.5vw!important;
    }
  }
  @media (max-width: 3000px){
    .the__project {
        height: 30vh;
    }
  }
  @media (max-width: 2000px){
    .the__project {
      height: 75vh;
    }
    .the__project h3{
      font-size: 2.7vw!important;
    }
  }
  .the__project a, .the__project a:hover {
    text-decoration: none;
  }
  .the__project{
    width: calc(100% / 4);
    position: relative;
    overflow: hidden;
    border-bottom-width: 2px;
    border: none white;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-box-shadow: inset 0px 0px 0px 5px rgba(0,0,0,0);
    -moz-box-shadow: inset 0px 0px 0px 5px rgba(0,0,0,0);
    box-shadow: inset 0px 0px 0px 5px rgba(0,0,0,0);
  }
  .the__project img{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: filter, all ease-in-out 0.3s;
    
  }
  .the__project .content__wrapper{
    position: relative;
    z-index: 99;
    padding: 60px 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .the__project h3, .the__project h5{
    margin: 0;
    color:white;
    opacity: 0;
    position: relative;    
  }
  .the__project h3{
    transition: all ease-in-out 0.3s;
  }
  .the__project h5{
    transition: all ease-in-out 0.3s;
  }
  .the__project:hover h3, .the__project:hover h5{
    opacity: 1;
    width: 100%;
    text-align: center;
  }

  .the__project h5{
    position: absolute;
    top: unset!important;
    bottom: 10%;
  }
  .the__project h3{
    font-family: MarkPro, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-size: 1.4em;
    word-spacing: 100vw; 
  }
  .the__project h5{
    font-family: MarkPro, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.8px;
    padding-top: 10px;
  }
  .the__project .overlay{
    width: 100%;
    height: 100%;
    background: #000000c9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
  .the__project:hover img{
    transform: scale(1.1);
    filter: blur(0.5px);
  }
  .the__project:hover .overlay{
    opacity: 1;
    transition: all ease-in-out 0.4s;
  }
  .the__project a{
    text-decoration: none;
  }
  .zoomIn{
      width: calc(100% / 4);
      height: 72vh;
      opacity: inherit;
      margin: inherit;
      padding: inherit;
      animation-name: zoomIn;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
  }
  .zoomOut{
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
      padding: 0;
      animation-name: zoomOut;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
  }
  /*
  @keyframes zoomIn {
    0% {
      display: none;
      opacity: 0;
      transform: scale(0);
      transform-origin: 50% 50%;
    }
    50%{
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
      transform: scale(1);
      transform-origin: 50% 50%;
      position: relative;
      z-index: 0;
    }
  }
  @keyframes zoomOut {
    0% {
      display: block;
      opacity: 1;
      transform: scale(1);
      transform-origin: 50% 50%;
    }
    14%{
      opacity: 0;
    }
    90% {
      opacity: 0;
      transform: scale(0);
      transform-origin: 50% 50%;
    }
    100%{
      position: relative;
      z-index: -999;
      opacity: 0;
      left: -5000px;
      transform: scale(0);
      transform-origin: 50% 50%;
    }
  }*/
  @media (max-width: 1280px){
    .the__project{
      height: 520px;
    }
  }
  @media (max-width: 1024px){ 
    .the__project {
        height: 430px;
    }
  }
  @media (max-width: 768px){
    .the__project{
      width: calc(100% / 3);
    }
      @keyframes zoomOut {
    0% {
      display: block;
      opacity: 1;
      transform: scale(1);
      transform-origin: 50% 50%;
    }
    14%{
      opacity: 0;
    }
    90% {
      opacity: 0;
      transform: scale(0);
      transform-origin: 50% 50%;
    }
    100%{
      position: absolute;
      z-index: -999;
      opacity: 0;
      left: -5000px;
      transform: scale(0);
      transform-origin: 50% 50%;
    }
  }
  }
  @media (max-width: 500px){
    .the__project{
      width: calc(100% / 2);
    }
    .the__project {
      height: 320px;
    }
  }
</style>