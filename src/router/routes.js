const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "/stat", component: () => import("pages/Stat.vue") }
    ],
  },
  { path: "/game", component: () => import("pages/Index.vue") },
  { path: "/start", component: () => import("pages/Start.vue") },
  { path: "/modal", component: () => import("pages/Modal.vue") },
  { path: "/stat", component: () => import("pages/Stat.vue") },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
