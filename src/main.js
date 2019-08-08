import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import VueResource from  'vue-resource'
import home from './components/Home2'
import menu from './components/Menu'
import admin from './components/Admin'
import about from './components/About'
import login from './components/Login'
import register from './components/Register'

import helloWorld from './components/HelloWorld'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
//配置路由
const router=new VueRouter({
  routes:[
    {path:"/", component:home},
    {path:"/Menu", component:menu},
    {path:"/Admin", component:admin},
    {path:"/About", component:about},
    {path:"/Login", component:login},
    {path:"/Register", component:register},
    {path:"*", redirect:"/"}
    // ,
    // {
    //   path: "/helloWorld",
    //   component: helloWorld
    // }
  ],
  mode:"history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
