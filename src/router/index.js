import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const baseTitle = ' - TZOF'
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("views/login/Login.vue"),
    meta: {
      title: "登录" + baseTitle,
      auth: false,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
