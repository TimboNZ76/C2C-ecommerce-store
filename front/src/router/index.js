import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import CreateListing from "../views/CreateListing.vue";
import PostDetail from "../views/PostDetail.vue";
import MyListings from "../views/MyListings.vue";
import PostUpdate from "../views/PostUpdate.vue";
import Notifications from "../views/Notifications.vue";
import Account from "../views/Account.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/CreateListing",
    name: "CreateListing",
    component: CreateListing,
    props: true,
  },
  {
    path: "/PostDetail/:postId",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/MyListings",
    name: "MyListings",
    component: MyListings,
  },
  {
    path: "/PostUpdate",
    name: "PostUpdate",
    component: PostUpdate,
    props: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    props: true,
  },
  {
    path: "/Account",
    name: "Account",
    component: Account,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
