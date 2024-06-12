/*✅ Activity 18: Mixin  */
export default {
  methods: {
    showAlert(icon, title) {
      this.$swal({
        position: 'top-end',
        icon, // success or error
        title,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
