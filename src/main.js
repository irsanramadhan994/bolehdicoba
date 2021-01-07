import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin } from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Dashboard from './components/Dashboard.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Profile from './components/Profile.vue'

const routes = [
  {path:'/',component:Dashboard},
  {path:'/about',component:About},
  {path:'/profile',component:Profile},

 ]

 const router = new VueRouter({
   mode:'history',
   routes
 })

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
