import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import '@kor-ui/kor';
import '@kor-ui/kor/kor-styles.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
