import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";

import AOS from "aos/dist/aos.css";

Vue.use(VueAxios, axios);

new Vue({
  router,
  create() {},
  render: h => h(App)
}).$mount("#app");
