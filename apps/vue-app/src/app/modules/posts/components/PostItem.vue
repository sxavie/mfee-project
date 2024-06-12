<template>
  <!-- Inicio PostItem.vue -->
  <div class="col-md-12 col-lg-6">
    <div class="card bg-dark text-white">
      <img :src="this.post.image" class="card-img" />
      <div class="card-img-overlay mt-3 ms-3 card-img" @click="goToPostDetail(post.id)">
        <div class="card-content">
          <h1 class="display-5"> {{ this.post.title }}  </h1>
          <p class="card-text fs-5">
            <em> {{ this.post.comments.length }} comments </em>
            <i class="fa-solid fa-comment"></i>
          </p>
          <p class="card-text fs-5">{{ this.post.description }}</p>
          <p class="card-text fs-5 text-uppercase">
            <strong>{{ this.post.category.name }}</strong>
          </p>
        </div>
      </div>
      <div class="card-img-overlay card-buttons">
        <div class="d-flex justify-content-end align-items-center ms-4">
          <i class="fa-solid fa-pen pe-3" @click="editPost" data-bs-toggle="modal" data-bs-target="#createPostModal"></i>
          <i class="fa-solid fa-trash" @click="removePost(this.post.id)"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin PostItem.vue -->
</template>

<script>
import { store } from '../store/store';
import { deletePost } from '../helpers/posts.js';
import showAlert from '../helpers/alerts.js';

export default {
  name: 'PostItem',
  emits: ['deleteEmitter'],
  mixins: [ showAlert ],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPostDetail(id) {
      this.$router.push(`/post-detail/${id}`)
    },
    editPost () {
      store.setPostEditing(this.post)
    },
    async removePost (id) {
      await deletePost(id);
      this.showAlert('success', 'Post Deleted')
      this.$emit('deleteEmitter')
    }
  },

};
</script>

<style>
.col-md-12,
.col-lg-6 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.card {
  border: 0;
  border-radius: 0;
}
.card:hover {
  cursor: pointer;
}
.card-content {
  display: flex;
  justify-content: end;
  flex-direction: column;
  height: 100%;
}
.card-img {
  bottom: 40px;
}
.card-buttons {
  top: 85%;
}
</style>
<!--✅ Activity 10: Adding click events */ -->
<!--✅ Activity 12: Adding events and props */ -->
<!--✅ Activity 14: Vue router  -->
<!--✅ Activity 17: Watcher  -->
