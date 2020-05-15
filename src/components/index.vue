<template>
  <div class="indexhome">
    <div class="indexhomebg"></div>
	<div class="indexhomecon">
		<div class="indexhomeconOrder">订单号：{{xqinfo.order_id}}</div>
		<div class="indexCon">
			<van-panel title="所报课程"  :status="xqinfo.course_num+'课时'">
			  <van-card
			    :price="xqinfo.price"
			    :title="xqinfo.course_name"
			    :thumb="xqinfo.course_img"
			    :origin-price="xqinfo.original_price"
			  />
			</van-panel>
			<van-cell :border="false" :title="'孩子姓名:'+xqinfo.student_name" />
			<van-cell :border="false" :title="'联系方式:'+xqinfo.phone" />
		</div>
	</div>
	<van-submit-bar :price="xqinfo.price*100" button-text="支付" @submit="onSubmit" />
  </div>
</template>

<script>
  import VueQr from 'vue-qr'
  import { Toast, Dialog } from 'vant';
export default {
	components: { VueQr },
  data() {
    return {
		config: {
		  value: '',//显示的值、跳转的地址
		  imagePath: ''//中间logo的地址
		},
      detalisides: '',
      checked: true,
      xqinfo:[],
    };
  },
  methods: {
		// 数据绑定
		XQobjInfo(){
			let _this = this
			let thisdatacode = {
				order_id:this.$route.query.INGowthpay
			};
			this.axios.post('v2/sweepCodeOrder',this.qs.stringify(thisdatacode)).then((response)=>{
					// ...
					console.log(response);
				//失败
				if (response.data.code==1000) {
					//访问
					this.xqinfo = response.data.data;
				}else{
					Toast(response.data.msg);
				}
			});
		},
		//支付
		onSubmit(){
			let _this = this
			let thisdatacode = {
				order_id:this.$route.query.INGowthpay
			};
			this.axios.post('v2/payment',this.qs.stringify(thisdatacode)).then((response)=>{
					// ...
					console.log(response);
				//失败
				if (response.data.code==1000) {
					//访问
					Toast(response.data.msg);
				}else{
					Toast(response.data.msg);
				}
			});
		}
  },
  mounted() {
	console.log(this.$route.query.INGowthpay);
	this.XQobjInfo();
    // 禁止返回
    if (window.history && window.history.pushState) {
      // 向历史记录中插入了当前页
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  destroyed() {
    //页面销毁返回销毁
    window.removeEventListener('popstate', this.goBack, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.indexhome{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.indexhomebg{
		width: 100%;
		height: 300px;
		background-color: #ff0038;
		position: absolute;
		z-index: -1;
		top:0;
		left: 0;
	}
	.indexhomecon{
		padding: 20px;
	}
	.indexhomeconOrder{
		line-height: 60px;
		text-align: left;
		background-color: inherit;
		color: #fff;
	}
	.indexCon{
		background-color: #FFFFFF;
		border-radius: 8px;
		box-shadow:2px 6px 8px rgba(0,0,0,0.1);
		overflow: hidden;
		padding-bottom: 40px;
	}
</style>
