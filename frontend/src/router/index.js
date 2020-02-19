import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/user/User.vue'
import UserDetail from '../views/user/UserDetail.vue'

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
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
