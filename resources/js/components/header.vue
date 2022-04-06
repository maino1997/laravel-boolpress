<template>
  <ul class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
    <li class="nav-item">
      <router-link
        class="nav-link active"
        :to="{
          name: 'posts',
        }"
        >Posts</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link active"
        :to="{
          name: 'contacts',
        }"
        >Contacts</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>