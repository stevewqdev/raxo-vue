<template>
    <div class="loader__screen"     v-bind:class="{'its__home': $route.path == '/', }">
        <div class="right__bar"></div>
        <div class="loader__wrapper">
            <div class="loader__gif">
                <img :src="require('@/assets/loader.gif')"  alt="Raxo Loading ">
            </div>
        </div>
        <div class="bottom__bar"></div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "Loader",
};

</script>

<style>
.loader__screen{
    display: none!important;
}
</style>