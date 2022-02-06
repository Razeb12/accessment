import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: ()=> import('../views/AddItem.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ()=> import('../views/Product.vue')
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: ()=> import('../views/EditProduct.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=> import('../views/Cart.vue')
  },
  {
    path: '/history',
    name: 'Admin',
    component: ()=> import('../views/History.vue')
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
