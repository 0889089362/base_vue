import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./common/plugins/vue-i18n";
import store from "./store";
import ApiService from "./common/api.service";

Vue.config.productionTip = false

// API service init
ApiService.init();

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
