<template>
	<div>
		
		<h1 align="center">{{name}}</h1>
		<dl v-for="val,index in list">
			<dt style="display: flex;flex-direction: column;" @click="btn(val.id)">
				<span>{{val.name}}</span>
				<em>{{val.type}}</em>
				
			</dt>
		</dl>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
  //定义数据
  data () {
    return {
     	list:[],
     	name:""
    }
  },
  //创建之前
  created(){
  	var name=this.$route.query.name
  	this.name=name
  	axios.get(`http://restapi.amap.com/v3/place/around?key=d9b0c725184fc33b2cf8d5d45629d339&location=116.3001600000,40.0417000000&keywords=${name}&page=1`).then((res)=>{
			this.list=res.data.pois
//			console.log(res)
		})
  },
  
  methods:{
  	btn(id){
  			this.$router.push({path:`/message?id=${id}`})
  	}
  
  }
  
}
</script>

<style>
	dl{
		height: 1.2rem;
		border-bottom: 1px solid #ccc;
		font-size: 0.28rem;
	}
	em{
		font-size: 0.22rem;
		margin-top: 0.2rem;
		
	}
</style>