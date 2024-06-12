<template>
  <!-- Inicio CategoryItem.vue -->
  <button type="button" class="btn btn-light" @click="toggleCategoryItem">{{ categoryName }}</button>
  <!-- Fin CategoryItem.vue -->
</template>

<script>
export default {
  /*✅ Activity 12: Adding events and props */
  name: 'CategoryItem',
  props: ['category'],
  methods: {
    toggleCategoryItem: function () {
      alert('click category item ', this.categoryName );
    }
  },
  computed: {
    categoryName: function () {
      return this.category.name;
    }
  }
};
</script>
<!--✅ Activity 10: Adding click events */ -->
