<template>
  <div class="">
    <navbar />
    <div class=" container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center">
      <h1 class="text-5xl">About us</h1>
      <p class="mt-4 text-lg">this is the ABOUT page</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
