import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {Field,Icon,Form,button,Popup,Cell} from 'vant';

Vue.use(Field).use(Icon).use(Form).use(button).use(Popup).use(Cell);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
