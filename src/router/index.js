// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      // {
      //   path: '',
      //   name: 'Home',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      // },
      {
        path: "",
        name: "login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "to1",
        name: "to1",
        component: () => import("@/views/to1.vue"),
      },
      {
        path: "to2/:id",
        name: "to2",
        component: () => import("@/views/to2.vue"),
      },
      {
        path: "to3",
        name: "to3",
        component: () => import("@/views/to3.vue"),
      },
      {
        path: "store-add",
        name: "store-add",
        component: () => import("@/views/store-add.vue"),
      },
      {
        path: "store-edit",
        name: "store-edit",
        component: () => import("@/views/store-edit.vue"),
      },
      {
        path: "test/veevalidate",
        name: "veevalidate",
        component: () => import("@/views/test/veevalidate.vue"),
      },
      {
        path: "Bar/Sidebar",
        name: "Sidebar",
        component: () => import("@/views/Bar/Sidebar.vue"),
      },
      {
        path: "Bar/Topbar",
        name: "Topbar",
        component: () => import("@/views/Bar/Topbar.vue"),
      },
      {
        path: "Bar/Footers",
        name: "Footers",
        component: () => import("@/views/Bar/Footers.vue"),
      },
      {
        path: "layout/:id",
        name: "layout",
        component: () => import("@/views/layout.vue"),
      },
      {
        path: "Bar/layoutCss",
        name: "layoutCss",
        component: () => import("@/views/Bar/layoutCss.vue"),
      },
      {
        path: "Go",
        name: "Go",
        component: () => import("@/views/Go.vue"),
      },
      {
        path: "datadata",
        name: "datadata",
        component: () => import("@/views/datadata.vue"),
      },
      {
        path: "Google",
        name: "Google",
        component: () => import("@/views/Google.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
