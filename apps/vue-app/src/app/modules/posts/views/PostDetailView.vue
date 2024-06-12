<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card bg-dark text-white">
        <img :src="post.image" class="card-img" />
        <div class="card-img-overlay">
          <!--✅ Activity 14: Vue router  -->
          <div class="d-flex justify-content-start align-items-center ms-4">
            <i class="fa-solid fa-chevron-left me-2" @click="back()"></i>
            <span>View Posts</span>
          </div>
        </div>
        <div class="card-img-overlay text-center title">
          <div class="card-content">
            <h1 class="display-2">
              <strong>{{ post.title  }}</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 bg-gray">
      <div class="container m-5">
        <p class="fs-5">{{ post.description }}</p>
        <!--✅ Activity 7: Render components: Render CommentList from /components folder */ -->
        <CommentList @addCommentEmitter="(comment) => posDataCommentListener(comment)" :comments="post.comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import CommentList from '../components/CommentList.vue';
import { getById, updatePost } from '../helpers/posts.js';

export default {
  name: 'PostDetailView',
  components: { CommentList },
  /*✅ Activity 5: Add created hook */
  created() {},
  data() {
    return {
      post: {
        category: {},
        categoryId: null,
        comments: [],
        description: null,
        id: null,
        image: null,
        title: null
      }
    };
  },
  async mounted() {
    const route = useRoute();
    const id = route.params.id;
    await this.getPost(id);
  },
  methods: {
    back() {
      this.$router.back();
    },
    posDataCommentListener($event) {
      this.addComment($event)
    },
    async getPost(id) {
      this.post = await getById(id);
    },
    async addComment(comment) {
      this.post.comments.push(comment);
      await updatePost(this.post)
    }
  }
  /*✅ Activity 16: Forms */
  /* Activity 17: Watcher */
};
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.bg-gray {
  background-color: #e7e7e7;
}
.title {
  top: 40px;
}
</style>
