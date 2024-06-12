<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>
    <div v-if="hasComments">
      <!--✅ Activity 7: Render components: Render CommentItem from /components folder */ -->
      <!--✅ Activity 12: Adding events and props -->
      <CommentItem v-for="comment in comments" :key="comment" :comment="comment" />
    </div>
    <div v-else class="alert alert-warning m-3" role="alert">There are not results.</div>
    <!--✅ Activity 7: Render components: Render NewComment from /components folder */ -->
    <NewComment/>
  </div>
</template>

<script>

import CommentItem from './CommentItem.vue'
import NewComment from './NewComment.vue'

export default {
  name: 'CommentList',
  components: { CommentItem, NewComment },
  data() {
    return {
      /*✅ Activity 8: Add v-for directive: Use this array to iterate <CommentItem> in the template */
      comments: ['1st comment', '2do comment', '3td comment']
    };
  },
  /*✅ Activity 9: Create computed properties: Create a computed property that validates if comments array has elements */
  computed: {
    hasComments: function () {
      return this.comments.length > 0
    }
  }
  /*   Activity 16: Forms */
};
</script>
