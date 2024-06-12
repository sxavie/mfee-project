import { createRouter, createWebHashHistory } from 'vue-router';
/*✅ Activity 14: Vue router */
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/posts/views/PostView.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: () => import('../modules/posts/views/PostDetailView.vue'),
    props: true
  },
  {
    path: '/:pathMatch',
    component: () => import('../modules/posts/shared/views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
