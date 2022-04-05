<template>
  <div>
    <Loader v-if="isLoaded" />

    <router-view></router-view>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  components: {
    Loader,
    PostsList,
  },
};
</script>
