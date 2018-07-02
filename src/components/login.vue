<template>
	<div class="login">
		<div class="lo">
			<h1 style="text-align: center; color: white;font-size: 0.7rem;">Welcome</h1>
			<div>登录 <input type="text" v-model="user" class="kuang"/></div>
			<div>密码 <input type="password" v-model="pwd" class="kuang"/></div>
			<div align="center" style="margin-top: 0.4rem;" @click="btn">立即登录</div>
		</div>
	</div>
</template>

<script>
	import md5 from 'js-md5'
	import axios from 'axios'
	import Qs from 'qs'
	export default {
		data(){
			return{
				user:"",
				pwd:""
			}
		},
		methods:{
			btn(){
				var user=this.user;
				var pwd=md5(this.pwd);
				if(user==""||pwd==""){
					alert('用户名不能为空')
				}else{
					var data={
						tel:user,
						password:pwd
					}
					var url='http://guoxiao158.top/nwt/login.php'
					axios.post(url,Qs.stringify(data)).then(res=>{
						if(res.data.user.name){
							console.log(res.data.user)
							this.$store.state.token=1;
							this.$router.push({path:"/home"})
							this.$store.state.name=res.data.user.name;
							this.$store.state.tel=res.data.user.tel;
						}else{
							alert("密码错误")
						}
					})
				}
				
		
			}
		}
	}
</script>

<style>
	.login{
		width: 100%;
		height: 100%;
		background:-webkit-linear-gradient(left top,#6cc9b9,#3879cb);
	}
	.lo{
		position: absolute;
		width: 4.3rem;;
		height: 6rem;
		
		top: 25%;
		left: 17%;
		font-size: 0.3rem;
		color: #e2ffff;
		
	}
	h1{
		font-weight:normal;
	}
	.kuang{
		width: 3.3rem;
		height: 0.7rem;
		margin-top: 0.2rem;
		border: 1px solid #ccc;
		opacity: 0.3;
		color: red;
		outline: none;
		text-indent: 0.1rem;
	}
</style>