<template>
  <!-- Inicio CategoryItem.vue -->
  <button type="button" class="btn btn-light" @click="toggleCategoryItem">Category 1</button>
  <!-- Fin CategoryItem.vue -->
</template>

<script>
export default {
  /* Activity 12: Adding events and props */
  name: 'CategoryItem',
  methods: {
    toggleCategoryItem: function () {
      alert('click category item');
    }
  }
};
</script>
<!--✅ Activity 10: Adding click events */ -->
