import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '@/views/Project2.vue'
import Project3 from '@/views/Project3.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project1', component: Project1 },
  { path: '/project2', component: Project2 },
  { path: '/project3', component: Project3 },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router