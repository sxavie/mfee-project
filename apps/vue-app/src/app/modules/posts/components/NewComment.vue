<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" placeholder="Write a comment" />
      <span class="form-text text-danger"> Error </span>
    </form>
  </div>
  <div class="col-md-6">
    <!--✅ Activity 10: Adding click events */ -->
    <button class="btn btn-primary mt-2" @click="addComment">Add</button>
  </div>
</template>

<script>
export default {
  name: 'NewComment',
  methods: {
    addComment: function () {
      alert('add comment event');
    }
  }
};
</script>
