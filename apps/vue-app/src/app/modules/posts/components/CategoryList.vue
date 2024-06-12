<template>
  <!-- Inicio CategoriesList.vue -->
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
export default {
  name: 'CategoryList',
  components: { CategoryItem },
  data() {
    return {
      /*✅ Activity 8: Add v-for directive: Use this array to iterate <CategoryItem> in the template */
        categories: [
        {
          id: 2,
          name: 'Travel'
        },
        {
          id: 3,
          name: 'Lifecycle'
        },
        {
          id: 4,
          name: 'Business'
        },
        {
          id: 5,
          name: 'Work'
        }
      ]
    }
  },
  /*✅ Activity 5: Add created hook */
  created() {
    this.buildCategories();
  },
  /*✅ Activity 12: Adding events and props */
  methods: {
    buildCategories() {
      this.categories = [
        {
          id: '1',
          name: 'All'
        },
        ...this.categories
      ];

      this.categories = this.categories.map((category) => ({
        ...category,
        active: category.name === 'All'
      }));
    }
  }
  /* Activity 13: Reactivity API */

  /* Activity 15: Using axios */
};
</script>
