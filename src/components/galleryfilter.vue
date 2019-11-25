<template>
    <div>
    <!-- 
    <ul id="gallery__filter">
      <li class="all selected">All 
        <span class="project__amount">
          
        </span>
      </li>
      <li class="branding">Branding 
        <span class="project__amount">
          
        </span>
      </li>
      <li class="design">Design 
        <span class="project__amount">
          
        </span>
      </li>
      <li class="motion__graphics">Motion Graphics 
        <span class="project__amount">
          
        </span>
      </li>
      <li class="web">Web Design 
        <span class="project__amount">
          
        </span>
      </li>
      <li class="strategy">Strategy 
        <span class="project__amount">
          
        </span>
      </li>
    </ul>
    -->
    <div class="hero">
      <p data-aos="fade-up" data-aos-delay="100" >Branding & Motion Graphics</p>
      <h1 data-aos="fade-up" data-aos-delay="400">Our Latest Projects</h1>
      <p data-aos="fade-up" data-aos-delay="200">From branding to animation and everything in between, check out our recent work below!</p>
    </div>

    </div>

</template>
<script>
import Vue from "vue";

export default {
  name: "GalleryFilter",
};

</script>

<style>
  .hero{
    color: white;
    text-align: left;
    font-family: MarkPro;
    margin: 200px 140px 70px;
  }
  .hero p:nth-child(1){
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #CCCCCC;
    font-size: 16px;
    letter-spacing: 1.5px;
        font-family: MarkPro;
  }
  .hero p:nth-child(3){
    max-width: 76%;
    margin-top: 20px;
    font-size: 16px;
    font-family: MarkPro;
  }
  .hero h1{
    text-transform: uppercase;
    font-family: MarkPro;
    font-weight: 900;
    font-size: 72px;
    position: relative;
    max-width: 100%;
    display: initial;
  }
  .hero h1:after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -40px;
    margin: auto;
    width: 10px;
    height: 10px;
    background: #d13368;
    border-radius: 100%;
    display: none;
  }
  .hero p, .hero h1{
    margin: 0;
    padding: 0;
  }
  #gallery__filter{
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    width: 50%;
    font-family: 'MarkPro';
    list-style-type: none;
  }
  #gallery__filter li{
    color: #111111;
    text-transform: uppercase;
    font-size: 11px;
    position: relative;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    font-family: MarkPro-Book;
    letter-spacing: 1px;
    padding: 0 5px 5px 5px;
    transition: all ease-in-out 0.3s;
  }
  .project__amount{
    font-size: 8px;
    position: absolute;
    top: 0px;
    margin-left: 3px;
    font-weight: normal;
    cursor: unset;
  }
  @media (max-width: 500px){
      #gallery__filter {
          padding: 0;
          width: 300px;
      }
      .project__amount {
        top: -2px;
      }
      #gallery__filter li {
        font-size: 8px;
      }
      .hero h1 {
        font-size: 50px;
    }
    .hero {
    margin: 122px 0;
    padding: 0 42px;
    width: 100%;
}
.hero p:nth-child(3) {
    max-width: 100%;
}
  }
</style>