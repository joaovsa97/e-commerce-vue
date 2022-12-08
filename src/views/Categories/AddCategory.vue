<template>
  <div class="container col-md-6 mt-5">
    <div class="row">
      <div class="text-center">
        <h1>Add Category</h1>
      </div>
    </div>
    <div class="row">
      <form class="text-center">
        <div class="form-group m-3">
          <label>Category Name</label>
          <input type="text" class="form-control" v-model="categoryName" />
        </div>
        <div class="form-group m-3">
          <label>Category Description</label>
          <textarea type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group m-3">
          <label>Category Image</label>
          <input type="text" class="form-control" v-model="imageUrl" />
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    addCategory() {},
  },
};
</script>
<style scoped></style>
