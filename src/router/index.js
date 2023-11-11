import { createRouter, createWebHistory } from "vue-router";
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
