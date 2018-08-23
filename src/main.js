// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import http from 'http'
import lodash from 'lodash'
import './styles/styles.scss'

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.prototype._ = lodash;

Vue.config.productionTip = false
console.log('process.env', process.env)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
