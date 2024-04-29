import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'Crear Item',
    component: CreateView
  },
  {
    path: '/editar/:id',
    name: 'Actualizar Item',
    component: EditView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
