import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import AnalysisView from '../views/AnalysisView.vue'


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
  ]
})

export default router
