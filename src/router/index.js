import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ComunityView from '../views/ComunityView.vue'
import AnalysisView from '../views/AnalysisView.vue'
import PapersView from '../views/PapersView.vue'
import FormView from '../views/FormView.vue'
import InterpretationView from '../views/InterpretationView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'vue-school-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: AboutUsView
    },
    {
      path: '/comunidad',
      name: 'comunidad',
      component: ComunityView
    },
    {
      path: '/analisis',
      name: 'analisis',
      component: AnalysisView
    },
    {
      path: '/papers/:varId',
      name: 'paper',
      component: PapersView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
    {
      path: '/interpretation',
      name: 'interpretation',
      component: InterpretationView,
    },
  ]
})

export default router
