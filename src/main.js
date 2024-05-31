import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/base.css";
import store from "./store";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

// add apex chart library
Vue.use(VueApexCharts);
Vue.component("ApexChart", VueApexCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
