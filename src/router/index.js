import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Relation from '@/components/relation'
import Me from '@/components/me'
import Login from '@/components/login'
import Zhou from '@/components/HelloWorld.vue'
import List from '../components/list'
import Message from '../components/message'
import Map from '../components/map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
       meta: {
         requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            }
    },{
    	path: '/relation',
     	component: Relation,
     	 meta: {
         requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            }
    },{
    	path:'/me',
    	component:Me,
    	 meta: {
         requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            }
    },{
    	path:'/login',
    	component:Login
    },{
    	path:'/zhou',
    	component:Zhou
    },{
      path: '/list',
      component: List
    },{
      path: '/message',
      component: Message
    },{
      path: '/map',
      component: Map
    }
  ]
})
