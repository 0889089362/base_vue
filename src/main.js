import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./common/plugins/vue-i18n";
import store from "./store";
import ApiService from "./common/api.service";
import {
  BootstrapVue,
  IconsPlugin,
  LayoutPlugin,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin,
  TablePlugin,
} from "bootstrap-vue";
import Carousel3d from 'vue-carousel-3d';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
// This imports <b-modal> as well as the v-b-modal directive as a plugin:
Vue.use(ModalPlugin);

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
Vue.use(CardPlugin);

// This imports directive v-b-scrollspy as a plugin:
import {} from "bootstrap-vue";
Vue.use(VBScrollspyPlugin);

// This imports the dropdown and table plugins
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
Vue.use(Carousel3d);

// API service init
ApiService.init();
new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
