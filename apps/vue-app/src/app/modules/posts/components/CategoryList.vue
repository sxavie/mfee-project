<template>
  <!-- Inicio CategoriesList.vue -->
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" />
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

  }
};
</script>
