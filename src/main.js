import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import App from './App';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';

Vue.config.productionTip = false;
Vue.use(ElementUi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
