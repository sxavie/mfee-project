<template>
  <!-- Inicio CategoryItem.vue -->
  <button type="button" class="btn btn-light" @click="selectCategory(category.id)" v-bind:class="{ active: category.active }">
    {{ category.name }}
  </button>
  <!-- Fin CategoryItem.vue -->
</template>

<script>
export default {
  /*✅ Activity 12: Adding events and props */
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectCategory(id) {
      this.$emit('selectCategory', id);
    }
  },
  computed: {}
};
</script>
<!--✅ Activity 10: Adding click events */ -->
