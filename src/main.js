import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "lazysizes";
import "./registerServiceWorker";

import AOS from "aos/dist/aos.css";

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  create(){
    AOS.init({disable: 'mobile',anchorPlacement: 'top-bottom',});
  },
  render: h => h(App),
}).$mount("#app");
