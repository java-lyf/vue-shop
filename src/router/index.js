import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: () => import('@/views/layout/tabbar'),
	  redirect:'/home',
	  children:[
		  {
			  path:'/home',
			  component: () => import('@/views/home/index'),
			  name:'home'
		  },
		  {
			  path:'/notice',
			  component: () => import('@/views/notice/index'),
			  name:'notice'
		  },
		{
			path: '/cart',
			component: () => import('@/views/cart/index'),
			name: 'car'
			
		},
		{
			path: '/info',
			component: () => import('@/views/goods/info'),
			name: 'info'
			
		},
		{
			path: '/account',
			component: () => import('@/views/account/account'),
			name: 'account'
			
		}
	  ]
    },
	
  ]
})
