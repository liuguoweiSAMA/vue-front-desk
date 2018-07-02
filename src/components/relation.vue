<template>
		<div class="main">
			<Head></Head>
			<div class="sections">
				<div style="display: flex;" class="limt"><div class="tel" @click="all">所有联系人</div>
				<div style="position: absolute;right: 0;top:1rem;">
				<Collapse accordion >
				        <Panel name="1">
				           		 全部联系人
				            <p slot="content" @click="btn()">
				             	<strong >一组</strong> 
				            </p>
							
				            <p slot="content" @click="btn1()">
				             	 <strong >二组</strong> 
				            </p>
				            <p slot="content"  @click="btn2()">
				             	 <strong>三组</strong> 
				            </p>
				           
				        </Panel>
				        </Collapse>
				        </div>
				      </div>
				   <div style="text-align: center;height: 0.75rem;border-bottom: 1px solid #ccc;line-height: 0.5rem;">
				   	<input type="text" v-model="ipu" @keydown.enter="put()" style="width: 90%;margin-top: 0.1rem;border-radius: 5px;border: 1px solid #ccc;"   placeholder="请输入姓名" />
				   </div>
				   <div> 
				   		<ul>
				   			<li v-for="val,index in list"><span>{{val.name}}</span> <span>{{val.tel}}</span> {{val.section}}</li>
				   			<li v-if="list==''">抱歉!没有此联系人的信息</li>
				   		</ul>
				   </div>
			</div>
			<Foot/>
		</div>
</template>
<script type="text/javascript">
	import Head from '@/components/head.vue'
	import Foot from '@/components/foot.vue'
	import axios from 'axios'
	export default {
	  name: 'App',
	   data () {
            return {
                list:[],
                list2:[],
                num:0,
                ipu:"",
                sum:1
            }
       },
	  components:{
		  	"Head":Head,
		  	"Foot":Foot
		 },
		 created(){
		 	axios.get(`http://guoxiao158.top/nwt/getinfo.php?type=2&page=${this.sum}`).then((res)=>{
		 		this.list=res.data.dataList
		 		this.list2=res.data.dataList
		 		this.num=res.data.dataList.length
		 		console.log(res)
		 	})
		 },
		 methods:{
		 	all(){
		 		this.ipu=""
		 		axios.get(' http://guoxiao158.top/nwt/getinfo.php?type=2').then((res)=>{
		 			this.list=res.data.dataList
		 		})
		 	},
		 	btn(){
		 		this.ipu=""
		 		this.list=[]
		 		for(var i=0;i<this.num;i++){
		 			if(this.list2[i].section=='一组'){
		 				this.list.push(this.list2[i])
		 			}
		 		}
		 		console.log(this.arr)
		 	},
		 	btn1(){
		 		this.ipu=""
		 		this.list=[]
		 		for(var i=0;i<this.num;i++){
		 			if(this.list2[i].section=='二组'){
		 				this.list.push(this.list2[i])
		 			}
		 		}
		 		console.log(this.arr)
		 	},
		 	btn2(){
		 		this.ipu=""
		 		this.list=[]
		 		for(var i=0;i<this.num;i++){
		 			if(this.list2[i].section=='三组'){
		 				this.list.push(this.list2[i])
		 			}
		 		}
		 		console.log(this.arr)
		 	},
		 	put(){
		 		this.list=[]
		 		var a=this.list2
		 		for(var i=0;i<this.num;i++){
		 			if(a[i].name.includes(this.ipu)){
		 				this.list.push(this.list2[i])
		 			}
		 		}
		 	}
		 	
		 }
	}
</script>
<style type="text/css">
	.ivu-collapse-content-box p{
		
		border-bottom: 1px solid #ccc;
		line-height: 0.5rem;
		height: 0.5rem;
	}
	.ivu-collapse-content-box p span{
			margin-left: 1rem;
			display: inline-block;
			width: 3rem;
			
	}
	
	.ivu-collapse-header{
		padding-right:32px ;
	}
	.ivu-collapse-content{
		border: 1px solid #ccc;
	}
	.tel{
		background: orange;
		line-height: 0.7rem;
		font-size: 0.25rem;
		width: 2rem;
		text-align: center;
		margin-right: 1.7rem;
	}
	.limt{
		height: 0.7rem;
		border-bottom: 1px solid #ccc;
	}
	p strong{
		margin-left: 0.9rem;
	}
</style>