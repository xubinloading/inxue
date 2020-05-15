import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex
Vue.use(Vuex);

// vuex数据存储
const store = new Vuex.Store({
	state:{
		uidcode:'',
		//小区信息
		XQobjInfo:[]
	},
	getters:{
		//方法调用监听state改变
		getStateCount:function(state){

		}
	},
	mutations:{
		//方法处理及参数传入
		setTheFirstLink(state,nickName) {
　　　　　　state.theFirstLink = nickName;
　　　　 },
	},
	actions:{
		//方法参数植入

	}
});
//时间戳转换
const timeZH = function(cjsj) {
	var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-'
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
	var D = date.getDate() + ' '
	var h = date.getHours() + ':'
	var m = date.getMinutes() + ':'
	var s = date.getSeconds()
	return Y + M + D + h + m + s
	// return Y+M+D
}

//距离封装
const addjl = function(e){
	let addll='';
	if (e>=1000) {
		addll=(e/1000).toFixed(2)+"k";
	} else{
		addll = e
	}
	return addll
}

//getUrlParam封装
const getUrlParam = function(name) { //封装方法
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}

export default {
	store,
	timeZH,
	addjl,
	getUrlParam
}
