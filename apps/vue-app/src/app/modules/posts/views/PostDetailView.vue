<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card bg-dark text-white">
        <img src="https://cdn.pixabay.com/photo/2017/02/22/17/06/wave-2089959_960_720.jpg" class="card-img" />
        <div class="card-img-overlay">
          <!-- Activity 14: Vue router  -->
          <div class="d-flex justify-content-start align-items-center ms-4">
            <i class="fa-solid fa-chevron-left me-2"></i>
            <span>View Posts</span>
          </div>
        </div>
        <div class="card-img-overlay text-center title">
          <div class="card-content">
            <h1 class="display-2">
              <strong>Post title</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 bg-gray">
      <div class="container m-5">
        <p class="fs-5">Post Description</p>
        <!-- Activity 7: Render components: Render CommentList from /components folder */ -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*   Activity 5: Add created hook */
};
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.bg-gray {
  background-color: #e7e7e7;
}
.title {
  top: 40px;
}
</style>
