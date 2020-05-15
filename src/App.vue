<template>
	<div id="app">
		<transition :name="transitionName">
			<!-- <keep-alive> -->
			<router-view /><!-- 缓存页面 -->
			<!-- </keep-alive> -->
		</transition>
	</div>
</template>

<script>
	import {
		commonShare,
		shareTitle,
		shareUrl,
		shareImg,
		shareDesc
	} from "./USERJS/share";
	//引入微信
	import wx from 'weixin-js-sdk'
	export default {
		data() {
			return {
				transitionName: ''
			};
		},
		created() {
			//授权
			// this.getCode();
			//识别浏览器
			// this.IsWeixinOrAlipay();
		},
		methods: {
			//识别浏览器
			IsWeixinOrAlipay(){			
			    var ua = window.navigator.userAgent.toLowerCase();			
			    //判断是不是微信			
			    if ( ua.match(/MicroMessenger/i) == 'micromessenger' ) { 			
			        return alert('WeiXIN');			
			    }   			
			    //判断是不是支付宝
			    if (ua.match(/AlipayClient/i) == 'alipayclient') {		
			        return alert("Alipay"); 			
			    }
			    //哪个都不是	
			    return alert("什么也不是"); 			
			},			
		},
		watch: { //使用watch 监听$router的变化
			$route(to, from) {
				//如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if (to.meta.index > from.meta.index) {
					//设置动画名称
					this.transitionName = 'slide-left';
				} else {
					this.transitionName = 'slide-right';
				};
			}
		},
		mounted() {}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
	}

	body,
	html {
		width: 100%;
		/* height: 100%; */
		/* background-color: rgba(255, 255, 255, 1); */
	}

	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 500ms;
		position: absolute;
	}

	.slide-right-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}

	.slide-right-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.slide-left-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.slide-left-leave-active {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
</style>
