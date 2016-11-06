import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import SecureApp from './components/SecureApp'
import Dashboard from './components/Dashboard'
import RealTime from './components/RealTime'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/secure',
    component: SecureApp,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'realtime',
        component: RealTime
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
