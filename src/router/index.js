import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'//首页

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/INGowthpay/',
    routes: [
    {
      path: '/',
      name: 'index',
      component: index,
	    meta:{index:0}
    }
  ]
})
