import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state={
	tit:"公告",
	token:""
}
const mutations={
	gong(){
		state.tit="公告"
	},
	lian(){
		state.tit="联系人"
	},
	wo(){
		state.tit="我的"
	}
}
export default new 	Vuex.Store({
	state,mutations
})
