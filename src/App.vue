<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
h1 {
  font-size: 2.5rem;
}
body {
  background-color: rgb(250, 215, 215);
}
</style>
