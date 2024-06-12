<template>
  <!-- Inicio CategoriesList.vue -->
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" :category="category" @selectCategory="(id) => emittedIdCategory(id)" />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { store } from '../store/store.js';
import { getCategories } from '../helpers/categories.js'
export default {
  name: 'CategoryList',
  components: { CategoryItem },
  data() {
    return {
      /*✅ Activity 8: Add v-for directive: Use this array to iterate <CategoryItem> in the template */
      categories: []
    };
  },
  /*✅ Activity 5: Add created hook */
  created() {
    this.getCategories();
  },
  /*✅ Activity 12: Adding events and props */
  methods: {
    async getCategories() {
      this.categories = await getCategories();
      this.buildCategories();
    },
    buildCategories() {
      this.categories = [
        {
          id: 1,
          name: 'All'
        },
        ...this.categories
      ];

      this.categories = this.categories.map((category) => ({
        ...category,
        active: store.currentCategoryId === category.id
      }));
    },
    emittedIdCategory($event) {
      this.categories = this.categories.map((category) => ({
        ...category,
        active: category.id == $event
      }));
      store.setCurrentCategory($event)
    }
  }
  /*✅ Activity 13: Reactivity API */

  /*✅ Activity 15: Using axios */
};
</script>
