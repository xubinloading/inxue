// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs';

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.qs = qs
//默认后台接口前缀
axios.defaults.baseURL='https://zht.insooner.com/jg/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import uerstore from './USERJS/store'//用户数据
import AreaList from './USERJS/Area.js'//省市区数据
Vue.prototype.$AreaList = AreaList.AreaList  //省市区数据引入

import {Panel,ActionSheet,Area ,Tag, Button, Dialog, Checkbox, CheckboxGroup, Icon,Popup,GoodsAction,GoodsActionIcon,GoodsActionButton,SubmitBar,Field,RadioGroup,Radio,Toast,DropdownMenu, DropdownItem,List,cell,Card,Swipe, SwipeItem,Search,Picker } from 'vant'
Vue.use(Panel).use(ActionSheet).use(Area).use(Tag).use(Button).use(Dialog).use(Checkbox).use(CheckboxGroup).use(Icon).use(Popup).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(SubmitBar).use(Field).use(RadioGroup).use(Radio).use(Toast).use(DropdownMenu).use(DropdownItem).use(List).use(cell).use(Card).use(Swipe).use(SwipeItem).use(RadioGroup).use(Radio).use(Picker);

Vue.config.productionTip = false

Vue.prototype.$uerstore = uerstore  //数据引入


router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
// 全局调用页面访问写法：this.$uerstore
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  qs,
  uerstore,
  components: { App },
  template: '<App/>'
})
