<template>
  <div class="col-md-6 mt-5">
    <form>
      <textarea type="text" class="form-control" placeholder="Write a comment" v-bind:class="{ 'is-invalid': false }" v-model="comment" ></textarea>
      <span v-if="errors.length" class="form-text text-danger">
        <p v-for="error in errors" :key="error"> error: {{ error }} </p>
      </span>
    </form>
  </div>
  <div class="col-md-6">
    <!--✅ Activity 10: Adding click events */ -->
    <button class="btn btn-primary mt-2" @click="checkForm">Add</button>
  </div>
</template>

<script>
export default {
  name: 'NewComment',
  emits: ["newCommentEmmiter"],
  data() {
    return {
      errors: [],
      comment: null
    };
  },
  methods: {
    checkForm() {

      if (this.comment) {
        this.$emit('newCommentEmmiter', this.comment);
        this.comment = null;
        this.errors = [];
        return true;
      }

      this.errors = [];

      if (!this.comment) this.errors.push('El comentario es requerido');
    },
  }
};
</script>
<!--✅ Activity 16: Forms -->
