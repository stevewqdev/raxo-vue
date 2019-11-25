<template>
    <div class="loader__screen__new">
        <div>
            <div >
                <img :src="require('@/assets/loader.gif')"  alt="Raxo Loading ">
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "NewLoader",
  mounted(){
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            setTimeout(function(){ 
                document.querySelector('.loader__screen__new').classList.add('remove__new__loader');
            }, 1000);
        }
    }

  }
};
</script>
<style>
.loader__screen__new{
    position: fixed;
    background: transparent;
    width: 100%;
    height: 100vh;
    z-index: 9999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    background: #111111;
    transition: height cubic-bezier(0.86, 0, 0.07, 1) 0.3s, top cubic-bezier(0.86, 0, 0.07, 1) 0.3s;
}
.loader__screen__new.remove__new__loader{
    height: 0vh;
    top: -10px;
}
.loader__screen__new img{
    width: 180px;
}
</style>