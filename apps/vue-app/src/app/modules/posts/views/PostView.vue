<template>
  <div>
    <!--✅ Activity 3: Render Header components -->
    <HeaderPost></HeaderPost>
    <div v-if="hasPosts">
      <div class="row pt-5">
        <!--✅ Activity 4: Render PostItem component -->
        <PostItem v-for="post in postsFiltered" :key="post.id" :post="post" @deleteEmitter="() => refreshPosts()"></PostItem>
      </div>
    </div>
    <div v-else class="alert alert-warning m-3" role="alert">There are not results.</div>
  </div>
</template>

<style>
.sub-title {
  color: #f0a441;
  font-weight: 300;
}
.create-post {
  height: 20px;
  color: #f0a441;
}
.create-post:hover {
  cursor: pointer;
}
</style>

<!--✅ Activity 12: Adding events and props */ -->
<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';
import { store } from '../store/store.js';

export default {
  name: 'PostView',
  components: { HeaderPost, PostItem },
  data() {
    return {
      /*✅ Activity 8: Add v-for directive: Use this array to iterate <PostItem> in the template */
      posts: []
    };
  },
  /*✅ Activity 5: Add created hook */
  /*✅ Activity 9: Create computed properties: Create a computed property that validates if posts array has elements */
  async created() {
    await this.callApi()
  },
  methods: {
    async refreshPosts() {
      await this.callApi()
    },
    async callApi(){
      await store.fetchApiPosts();
      this.posts = store.posts;
    }
  },
  computed: {
    hasPosts: function () {
      return this.posts.length > 0;
    },
    postsFiltered() {
      return store.currentCategoryId != 1 ? this.posts.filter((post) => post.category.id == store.currentCategoryId) : store.posts;
    }
  }
  /*✅ Activity 15: Using axios */
};
</script>
