<template>
  <ul class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <li class="nav-item">
      <router-link
        class="nav-link active link"
        :to="{
          name: 'posts',
        }"
        >POSTS</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link active link"
        :to="{
          name: 'contacts',
        }"
        >CONTACTS</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang='scss' scoped>
ul {
  list-style: none;
  .link {
    color: white;
    font-size: 1.5rem;
  }
}
</style>