<template>
	<div class="foot">
		<ul>
			<li @click="$store.commit('gong')"><router-link to="/home"  exact-active-class='active'><img src="../assets/公告.png"/> <p>公告</p></router-link></li>
			<li @click="$store.commit('lian')"><router-link to="/relation" exact-active-class='active'><img src="../assets/联系人.png"/><p>联系人</p></router-link></li>
			<li @click="$store.commit('wo')"><router-link to="/me" exact-active-class='active'><img src="../assets/我的.png"/><p>我的</p></router-link></li>
			<li @click="$store.commit('wo')"><router-link to="/zhou" exact-active-class='active'><img src="../assets/我的.png"/><p>查周边</p></router-link></li>
		</ul>
	</div>
</template>

<script>
	import Bus from '../router/bus'

	export default {
		
	}
</script>

<style>
	.active{
		display: block;
		background: greenyellow;
	}
</style>