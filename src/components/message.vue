<template>
	<div>
		
		<img :src="img.url"  class="img" @click="btn()"/>
		{{list.name}} |
		{{list.address}}
		<!--<p>营业时间: {{list.deep_info.opentime}}</p>-->
	</div>
</template>

<script>
		import axios from 'axios'
export default {
  //定义数据
  data () {
    return {
     	list:[],
     	img:'',
    }
  },
  //创建之前
  created(){
  	var id=this.$route.query.id
  	axios.get(`http://restapi.amap.com/v3/place/detail?key=d9b0c725184fc33b2cf8d5d45629d339&id=${id}`).then((res)=>{
			this.list=res.data.pois[0]
			console.log(res.data.pois[0])
			if(res.data.pois[0].photos.length!=0){
				this.img=res.data.pois[0].photos[0]
			}else{
				this.img=res.data.pois[0].deep_info.photos[0]
			}
				
			console.log()
			

		})
  },
  methods:{
  	btn(){
  		var map=this.list.location
  		console.log(this.list.location)
			this.$router.push({path:`/map?location=${map}`})
  	}
  
  }
  
}
</script>

<style>
.img{
	height: 4rem;
	width: 100%;
}
</style>