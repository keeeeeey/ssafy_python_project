import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoPage from "@/views/AllTodoPage"
import TodayTodoPage from "@/views/TodayTodoPage"
import ImportantTodoPage from "@/views/ImportantTodoPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllTodoPage
  },
  {
    path: '/today',
    name: 'today',
    component: TodayTodoPage
  },
  {
    path: "/important",
    name: "important",
    component: ImportantTodoPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
