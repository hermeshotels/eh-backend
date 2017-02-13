import Vue from 'vue'
import Element from 'element-ui'
import VueHighcharts from 'vue-highcharts'
import lang from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale'
import VueRouter from 'vue-router'
import App from './App'
import SiteWrapper from './components/SiteWrapper'
import Login from './components/Login'
import Register from './components/Register'
import SecureApp from './components/SecureApp'
import Dashboard from './components/Dashboard'
import RealTime from './components/RealTime'
import ApiManager from './components/ApiManager'
import BolSettings from './components/BolSettings'
import store from './store'
import VueFire from 'vuefire'
import fireApp from './api/firebase.js'

Vue.use(VueRouter)
locale.use(lang)
Vue.use(Element)
Vue.use(VueHighcharts)
Vue.use(VueFire)

const routes = [
  {
    path: '/',
    component: SiteWrapper
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/secure',
    component: SecureApp,
    beforeEnter: (to, from, next) => {
      fireApp.firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          next()
        }
      })
    },
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        name: 'realtime',
        path: 'realtime',
        component: RealTime
      },
      {
        path: 'api',
        component: ApiManager
      },
      {
        path: 'bol/settings',
        component: BolSettings
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
