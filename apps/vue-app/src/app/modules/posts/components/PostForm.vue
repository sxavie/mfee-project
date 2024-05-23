<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">Action Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group pb-3">
              <label>Title</label>
              <input type="text" class="form-control" />
              <span class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Description</label>
              <textarea class="form-control" rows="2"></textarea>
              <span class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Category</label>
              <select class="form-select">
                <option>Categoria 1</option>
                <option>Categoria 2</option>
              </select>
              <span class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group">
              <label>URL of the image</label>
              <input type="text" class="form-control" />
              <span class="form-text text-danger"> Error </span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal">Cancel</button>
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*   Activity 5: Add created hook */
  /*   Activity 6: Add unmounted hook */
};
</script>
