<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>
    <!-- Activity 7: Render components: Render CommentItem from /components folder */ -->
    <!-- Activity 12: Adding events and props -->
    <div class="alert alert-warning m-3" role="alert">There are not results.</div>
    <!-- Activity 7: Render components: Render NewComment from /components folder */ -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*   Activity 8: Add v-for directive: Use this array to iterate <CommentItem> in the template */
      comments: ['1st comment', '2do comment', '3td comment']
    };
  }
  /*   Activity 9: Create computed properties: Create a computed property that validates if comments array has elements */
  /*   Activity 16: Forms */
};
</script>
