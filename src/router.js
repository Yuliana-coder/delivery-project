import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

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
const Ordering = () =>
  import(
    /* webpackChunkName: "notifications" */ "@/page/ordering/ordering.vue"
  );
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      beforeEnter(to, from, next) {
        store.dispatch("getData").finally(() => {
          next();
        });
      },
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
        {
          path: "/notifications/:id",
          name: "orderning",
          component: Ordering
        },
      ],
    },
  ],
});

export default router;
