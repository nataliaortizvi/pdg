import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import AnalysisView from '../views/AnalysisView.vue'
import PapersView from '../views/PapersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/calculadora',
      name: 'calculadora',
      component: CalculatorView
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
  ]
})

export default router
