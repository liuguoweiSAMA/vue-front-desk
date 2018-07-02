<template>
	<div class="head">
		{{$store.state.tit}}
	</div>
</template>

<script type="text/javascript">
	import Bus from '../router/bus'
	export default {
		data(){
			return{
				name:"个人中心"
			}
		},
		created(){ 
			var that=this;		
			
			
		}
	}
//	Bus.$set(dataModel, 'name', num)
</script>

<style>
	.head{
		height: 1rem;
		background: #12b969;
		line-height: 1rem;
		font-size: 0.28rem;
		color: #e9fcf3;
		text-indent: 0.35rem;
	}
</style>