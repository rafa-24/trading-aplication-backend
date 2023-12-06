const Profile = () => import("../view/Profile.vue");

const profileUserRouter = {
  path: "/profile",
  name: "profile",
  component: Profile,
};

export default profileUserRouter;
