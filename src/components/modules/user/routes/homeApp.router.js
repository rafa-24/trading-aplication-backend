const HomeApp = () => import("../view/HomeApp.vue");

const homeAppUserRouter = {
  path: "/home-app",
  name: "home-app",
  component: HomeApp,
};

export default homeAppUserRouter;
