import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Container from '@/components/layout/Container'
import Home from '@/views/Home'
import UserList from '@/views/user/User'
import UserDetail from '@/views/user/UserDetail'
import Chart from '@/views/chart/Chart'
import AccodionView from '@/views/accodion/AccodionView'


import NotFound from '@/views/NotFound'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Container',
    component: Container,
    redirect: {name: 'Home'},
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'user',
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
      // {
      //   path: '/user',
      //   name: 'UserList',
      //   component: UserList,
      //   beforeEnter: (to, from, next) => {
      //     store.dispatch('userList/resetUserData')
      //     next()
      //   }
        
      // },
      // {
      //   path: '/user/view?:id',
      //   name: 'UserDetail',
      //   component: UserDetail
      // },
      {
        path: 'chart',
        name: 'Chart',
        component: Chart
      },
      {
        path: 'accodion',
        name:'AccodionView',
        component: AccodionView
      },
    ]
  },
  
  {
    path: '*',
    name: 'NotFound',
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
