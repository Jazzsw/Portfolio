import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '@/views/Project2.vue'
import Project3 from '@/views/Project3.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project1', component: Project1 },
  { path: '/project2', component: Project2 },
  { path: '/project3', component: Project3 },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },

})
export default router