import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '@/views/Project2.vue'
import Project3 from '@/views/Project3.vue'
import Contact from '@/views/Contact.vue'
import Project4 from '@/views/Project4.vue'
import Project5 from '@/views/Project5.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects/sim-usability-study', component: Project1 },
  { path: '/projects/page-ui-ux-updates', component: Project2 },
  { path: '/projects/component-design', component: Project3 },
  { path: '/projects/dungeon-runner', component: Project4 },
  { path: '/projects/sheetforge', component: Project5 },
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