/*import { createRouter, createWebHistory } from "vue-router";
import RegisterUserView from "../views/RegisterUserView";
import SignInView from "../views/SignInView";
import HomeAppView from "../views/HomeAppView";
import ProfileView from "../views/ProfileView";
import FeelingsLogView from "../views/FeelingsLogView";
import FinancialJournalView from "../views/FinancialJournalView";
import RankingTradersView from "../views/RankingTradersView";

const routes = [
  {
    path: "/",
    name: "home", // Puedes darle un nombre a la ruta de inicio
    component: RegisterUserView,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignInView,
  },
  {
    path: "/home-app",
    name: "home-app",
    component: HomeAppView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/feelings-log",
    name: "feelings-log",
    component: FeelingsLogView,
  },
  {
    path: "/financial-journal",
    name: "financial-journal",
    component: FinancialJournalView,
  },
  {
    path: "/top-traders",
    name: "top-traders",
    component: RankingTradersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
*/


import {createRouter, createWebHistory} from "vue-router";
import userRouter from "../components/modules/user/router";
import RegisterRoutes from "../components/modules/auth/router";
import loginRouter from "../components/modules/auth/signInRouter";
import homeAppUserRouter from "../components/modules/user/routes/homeApp.router";
import profileUserRouter from "../components/modules/user/routes/profile.router";
import { emotionalLogRouter } from "../components/modules/emotional-log/router";



// Ruta prinncipal
const routes  = [
  userRouter,
  RegisterRoutes,
  loginRouter,
  homeAppUserRouter,
  profileUserRouter,
  emotionalLogRouter  
];

const router = createRouter({
  history:  createWebHistory(process.env.BASE_URL),
  routes
})

export default router;