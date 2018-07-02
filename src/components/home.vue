<template>
		<div class="main">
			<Head></Head>
			<div class="section">
			
				<ul>
					<li v-for="val,index in list" @click="btn(index)"> <span>Name:{{val.user}}</span> <span>title:{{val.content}} <b> {{val.time}}</b></span></li>
				</ul>
			
			</div>
			<Foot/>
			<div class="modal is-active" v-if="showModal">
                 
              </div>
              <div class="box"  v-if="showModal" >
                    <img src="../assets/叉.png" class="close" @click="close"/>
                 <div style="text-align: center;height: 0.7rem;border-bottom: 1px solid #ccc;line-height: 0.7rem;font-size: 0.3rem;">{{arr.title}}</div>
                <div style="display: flex;">
                   <span style="font-size: 0.27rem;">{{arr.user}}:</span>
                   <div style="flex: 1;">
                   	{{arr.content}}
                   	<p style="margin-left: 70%;">
	                  	{{arr.time}}
	                  </p>
                   	  </div>
	                  
                      	
                 
                  	</div>
                 </div>     
		</div>
</template>
<script type="text/javascript">
	import Head from '@/components/head.vue'
	import Foot from '@/components/foot.vue'
	import axios from 'axios'
	export default {
		data(){
			return{
				list:[],
				showModal:false,
				arr:[]
			}
		},
	  components:{
		  	"Head":Head,
		  	"Foot":Foot
		 },
		 created(){
		 	axios.get('http://guoxiao158.top/nwt/getad.php').then((res)=>{
		 		var li=res.data.dataList
		 		this.list=li
		 		
		 	})
		 },
		 methods:{
		 	btn(index){
		 		this.arr=this.list[index]
//		 		console.log(this.list[index]),
		 		 this.showModal = true;
		 	},
		 	close(){
		 		this.showModal = false;
		 	}
		 	
		 }
	}
</script>
<style type="text/css">
	.section{
		overflow: scroll;
	}
	.section li{
		display: flex;
	}
	.section li span{
		display: block;
		width: 180px;
		position: relative;
	}
	b{
		position: absolute;
		right: 0;
		bottom:-15px;
	}
	.modal{
		/*display: none;*/
		position: absolute;
		background: black;
		width: 100%;
		height: 100%;
		opacity: 0.4;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box{
		position: absolute;
		left: 0.6rem;
		top: 1.7rem;
		width: 5.1rem;
		height: 7rem;
		background: white;
	}
	.close{
		position: absolute;
		width: 0.3rem;
		right: 0.1rem;
		top: 0.1rem;
		
	}
</style>