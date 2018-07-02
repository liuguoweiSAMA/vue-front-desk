<template>
  <div class="hello">
  		<div class="heads">
  			<img src="../../static/img/logo.jpg"/>
	  		<ol> 
	  			<li style="color: orange;">分类</li>
		  		<li>登录</li>
		  		<li>搜索</li>
	  		</ol>
  		</div>
  		<div class="banner">
  			<input type="text" placeholder="请输入关键字" />
  		</div>
  		<div class="section">
  			<ul class="left">
  				<li v-for="val,index in list" @click="btn(index)" :class="{bg:num==index}">{{val.tit}}</li>
  			</ul>
  			<ul class="right">
  				<li v-for="val,index in arr" @click="btn2(val.name)"><img :src="val.img" /> {{val.name}}  <span>{{val.datatype}}</span></li>
  			</ul>
  		</div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  //定义数据
  data () {
    return {
     	list:[],
     	arr:[],
     	num:0
    }
  },
  //创建之前
  created(){
  	axios.get("../../static/weeklist.json").then((res=>{
  		this.list=res.data.type
  		this.arr=res.data.type[0].datainfo
  		
  		console.log(res)
  	}))
  },
  //点击方式
  methods:{
  	btn(index){
  		this.num=index
  		this.arr=this.list[index].datainfo
  	},
  	btn2(name){
  		console.log(111)
  		this.$router.push({path:`/list?name=${name}`})
//		axios.get(`http://restapi.amap.com/v3/place/around?key=d9b0c725184fc33b2cf8d5d45629d339&location=116.3001600000,40.0417000000&keywords=${name}&page=1`).then((res)=>{
//			console.log(res)
//	
//		})
	
  }
  }
}
</script>

<style scoped>

</style>
