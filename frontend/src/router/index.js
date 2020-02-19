import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home'
import UserList from '../views/user/User'
import UserDetail from '../views/user/UserDetail'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: { render: h => h('router-view') },
    redirect: { name: 'UserList' },
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: UserList,
      },
      {
        path: 'view/:id',
        name: 'UserDetail',
        component: UserDetail
      }
    ],
    beforeEnter: (to, from, next) => {
      store.dispatch('userList/resetUserData')
      next()
    }
    
  },
  {
    path:'*', 
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkExactActiveClass:'exact_active',
  // linkActiveClass:'active'
})

export default router
