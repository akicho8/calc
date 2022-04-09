import Vue from 'vue'
import Router from 'vue-router'
import CalcApp from '@/components/CalcApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CalcApp',
      component: CalcApp,
    }
  ]
})
