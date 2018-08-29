
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001';

//import Axios from '../config/axios'
import http from 'http'
import Moment from 'moment'
import lodash from 'lodash' // lodash用来操纵数组和对象
import './styles/styles.scss'


//Vue.use(Axios);
Vue.use(ElementUI);
Vue.prototype.axios = axios; //自定义全局axios
Vue.prototype.$http = http; // 添加实例属性
Vue.prototype._ = lodash;
Vue.prototype.$moment = Moment;


Vue.config.productionTip = false;
console.log('process.env', process.env);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
