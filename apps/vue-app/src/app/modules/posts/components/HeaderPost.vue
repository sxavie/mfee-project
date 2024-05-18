<template>
  <!-- Inicio HeaderPosts.vue -->
  <div class="container pt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h6 class="sub-title">[ Making your Life Easier ]</h6>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h1 class="display-1">Discovering the World</h1>
      </div>
      <div class="col-12 d-flex justify-content-end p-2">
        <i class="fa-solid fa-square-pen fa-2xl create-post" data-bs-toggle="modal" data-bs-target="#createPostModal"></i>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <CategoryList></CategoryList>
      </div>
    </div>
  </div>
  <!-- Fin HeaderPosts.vue -->
</template>

<script>
import CategoryList from './CategoryList.vue';
export default {
  name: 'HeaderPost',
  components: { CategoryList }
};
</script>
