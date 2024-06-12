import { createRouter, createWebHashHistory } from 'vue-router';
/*✅ Activity 14: Vue router */

import PostView from '../modules/posts/views/PostView.vue';
import PostDetailView from '../modules/posts/views/PostDetailView.vue';
import PageNotFound from '../modules/posts/shared/views/NotFoundView.vue';

const routes = [
  {
    path: '/home',
    component: PostView
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/post/:id',
    component: PostDetailView
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
