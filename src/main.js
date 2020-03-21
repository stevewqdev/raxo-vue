import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";

Vue.use(VueAxios, axios);

new Vue({
  router,
  create() {},
  render: h => h(App)
}).$mount("#app");
