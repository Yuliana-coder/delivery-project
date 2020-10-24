import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import MainLayout from "@/layout-pages/main-layout.vue";

const Homepage = () =>
  import(
    /* webpackChunkName: "homepage-view" */ "@/page/homepage/homepage.vue"
  );
const Notifications = () =>
  import(
    /* webpackChunkName: "notifications" */ "@/page/notifications/notifications.vue"
  );

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "index",
          component: Homepage,
        },
        {
          path: "/notifications",
          name: "notifications",
          component: Notifications,
        },
      ],
    },
  ],
});

export default router;
