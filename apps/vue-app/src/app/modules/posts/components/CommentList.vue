<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>
    <!--✅ Activity 7: Render components: Render CommentItem from /components folder */ -->
    <CommentItem v-for="comment in comments" :key="comment" :comment="comment" />
    <!-- <div v-show="!hasComments" class="alert alert-warning m-3" role="alert">There are not results.</div> -->
    <!--✅ Activity 7: Render components: Render NewComment from /components folder */ -->
    <NewComment @newCommentEmmiter="(comment) => commentListEmitterListener(comment)" />
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue';
import NewComment from './NewComment.vue';

// ✅ Activity 12: Adding events and props
export default {
  name: 'CommentList',
  emits: ['addCommentEmitter'],
  components: { CommentItem, NewComment },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  create() {
    this.hasComments
  },
  data() {
    return {
      /*✅ Activity 8: Add v-for directive: Use this array to iterate <CommentItem> in the template */
    };
  },
  /*✅ Activity 9: Create computed properties: Create a computed property that validates if comments array has elements */
  computed: {
    hasComments: function () {
      return this.comments.length > 0;
    }
  },
  methods: {
    commentListEmitterListener($event) {
      this.$emit('addCommentEmitter', $event);
    }
  },

  /*✅ Activity 16: Forms */
};
</script>
