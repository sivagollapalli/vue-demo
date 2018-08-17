import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import UserList from "./UserList.js"
import Foo from "./Foo.js"
import NavHeader from "./NavHeader.js"
import MainContent from "./MainContent"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "vue-router/dist/vue-router"


const routes = [
  { path: "/foo", component: Foo },
  { path: "/users", component: UserList }
]

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
