<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ action }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetFormData"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group pb-3">
              <label>Title</label>
              <input type="text" class="form-control" v-model="formData.title" />
              <span v-show="!formData.title" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Description</label>
              <textarea class="form-control" rows="2" v-model="formData.description"></textarea>
              <span v-show="!formData.description" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Category</label>
              <select class="form-select" v-model="formData.categoryId">
                <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
              </select>
              <span v-show="!formData.categoryId" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group">
              <label>URL of the image</label>
              <input type="text" class="form-control" v-model="formData.image" />
              <span v-show="!formData.image" class="form-text text-danger"> Error </span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal" @click="resetFormData">Cancel</button>
          <button class="btn btn-primary" @click="createPost">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategories } from '../helpers/categories.js';
import { createPost } from '../helpers/posts.js';
import { ref } from 'vue';

const btnCloseModal = ref(null);

export default {
  /*✅ Activity 5: Add created hook */
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      this.categories = await getCategories();
    },
    async createPost() {
      const { title, description, categoryId, image } = this.formData;
      if (title != '' && description != '' && categoryId != '' && image) {
        this.formData.id = Math.random().toString(16).slice(2);
        const categoryFound = this.categories.filter((category) => category.name == categoryId);
        this.formData.category = categoryFound[0];
        await createPost(this.formData);
        this.resetFormData();
        this.$refs.btnCloseModal.click();
      }
    },
    resetFormData() {
      this.formData = {
        id: '',
        title: '',
        description: '',
        category: {},
        categoryId: '',
        image: '',
        comments: []
      };
    }
  },
  /*✅ Activity 6: Add unmounted hook */
  unmounted() {},
  data() {
    return {
      btnCloseModal,
      action: 'Action Post',
      categories: [],
      formData: {
        id: '',
        title: '',
        description: '',
        category: {},
        categoryId: '',
        image: '',
        comments: ''
      }
    };
  }
  /*✅ Activity 16: Forms */
};
</script>
