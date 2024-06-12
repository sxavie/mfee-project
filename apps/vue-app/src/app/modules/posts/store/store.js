/*✅ Activity 13: Reactivity API */
import { reactive } from 'vue';
import { getPosts } from '../helpers/posts';

export const store = reactive({
  currentCategoryId: 1,
  posts: [],

  setCurrentCategory(categoryId) {
    this.currentCategoryId = categoryId;
  },
  async fetchApiPosts() {
    this.posts = await getPosts();
  }
});
/*✅ Activity 15: Using axios */
/* Activity 17: Watcher */
