import Vue from 'vue'
import Element from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import SecureApp from './components/SecureApp'
import Dashboard from './components/Dashboard'
import RealTime from './components/RealTime'
import store from './store'

Vue.use(VueRouter)
locale.use(lang)
Vue.use(Element)

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
  store,
  render: h => h(App)
}).$mount('#app')
