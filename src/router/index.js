import { createRouter, createWebHistory } from 'vue-router'
import RegisterUserView from "../views/RegisterUserView";
import SignInView from "../views/SignInView";

const routes = [
  {
    path: '/',
    name: 'home',  // Puedes darle un nombre a la ruta de inicio
    component: RegisterUserView,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
