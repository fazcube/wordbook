import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {Field,Icon,Form,button,Popup,Cell,PullRefresh,Toast,SwipeCell,Card,List,Dialog} from 'vant';

Vue.use(Field).use(Icon).use(Form).use(button).use(Popup).use(Cell).use(PullRefresh).use(Toast).use(SwipeCell).use(Card).use(List).use(Dialog);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
