import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contactus.vue'
import Single from '../views/Single.vue'
import Category from '../views/Category.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/post/:id',
    name: 'Single',
    component:Single
  },
  {
    path: '/category/:id',
    name: 'Category',
    component:Category
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

router.afterEach(()=>{
  window.scrollTo(0,0)
})


export default router
