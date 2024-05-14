<script>
export default {
  data() {
    return {
      /*   Activity 8: Add v-for directive: Use this array to iterate <CategoryItem> in the template */
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
    };
  },
  /* Activity 12: Adding events and props */
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
  /*   Activity 5: Add created hook */

  /* Activity 13: Reactivity API */
};
</script>
