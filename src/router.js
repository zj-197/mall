import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const cart =()=> import('./views/cart/cart.vue')
const category =()=> import('./views/category/category.vue')
const HOME =()=> import('./views/HOME/HOME.vue')
const profile =()=> import('./views/Profile/profile.vue')
const detail =()=> import('./views/detail/detail.vue')
const routes =[
  {
    path:'',
    redirect:'/HOME'
  },
  {
    path: '/HOME',
    name: 'home',
    component: HOME
  },
  {
    path: '/category',
    name: 'category',
    component: category
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:'/profile',
    name:'profile',
    component: profile
  },
  {
    path:'/cart',
    name:'cart',
    component: cart
  },
  {
    path:'/detail/:iid',
    name:'detail',
    component: detail
  }
]
const rout = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default rout

