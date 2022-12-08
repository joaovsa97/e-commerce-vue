<template>
  <nav class="navbar navbar-expand-lg bg-dark sticky-top">
    <div class="container-fluid">
      <div>
        <img src="" alt="" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse justify-content-between navbar-collapse"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item m-2">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item m-2">
            <router-link to="/add">Add</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul,
a {
  list-style: none;
  text-decoration: none;
  color: white;
}

img {
  width: 40%;
  object-fit: contain;
}
</style>
