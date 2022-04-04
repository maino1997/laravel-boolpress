<template>
  <div>
    <Loader v-if="isLoaded" />
    <PostsList />
  </div>
</template>

<script>
import PostsList from "./posts/PostsList.vue";
import Loader from "./Loader.vue";
export default {
  components: {
    Loader,
    PostsList,
  },
};
</script>
