<template>
		<div class="main">
			<Head ></Head>
			<div class="sections" style="background: #f5f5f5;">
				<ul >
					<li style="display: flex;background: white;margin-top: 0.3rem;"><img src="../assets/h.png" class="my" style="margin-left: 0.5rem;"/>  <p style="margin-left: 1rem;">{{$store.state.name}}   &nbsp;  tel:{{$store.state.tel}}</p></li>
					<li style="background: white;margin-top: 0.3rem;"><img src="../assets/设置.png" class="set"/> 设置</li>
					<li  style="background: white;margin-top: 0.3rem;" @click="car">打卡</li>
				</ul>
			</div>
			<Foot/>
		</div>
</template>
<script type="text/javascript">
	import Head from '@/components/head.vue'
	import Foot from '@/components/foot.vue'
	import axios from 'axios'
	import Qs from 'qs'
	export default {
	  components:{
		  	"Head":Head,
		  	"Foot":Foot,
		  	
		 },
		 data(){
		 	return{
		 		name:''
		 	}
		 },
		 methods:{
		 	car(){
		 		var data={
		 			name:this.name,
		 			address:"116.3001600000,40.0417000000"
		 		};
		 		var url='http://guoxiao158.top/nwt/addcard.php'
					axios.post(url,Qs.stringify(data)).then(res=>{
						console.log(res) 
					})
		 	}
		 },
		 created(){
		 	this.name=this.$store.state.name
		 	console.log(this.$store.state.name)
		 	
		 }
	}
</script>
<style type="text/css">
	.foot{
		height: 1rem;
		border-top: 1px solid #ccc;
	}
	.foot ul{
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.foot ul li{
		flex: 1;
		text-align: center;
		margin-top: 0.15rem;
	}
	
	.foot ul li img{
		width: 0.4rem;
	}
	.section{
		flex: 1;
	}
	.set{
		width: 0.5rem;
		vertical-align: middle;
		margin-top: -0.1rem;
	}
	.my{
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
	}
</style>