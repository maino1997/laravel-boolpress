<template>
  <PostCard v-if="!post" :post="post" />
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  name: "PostDetail",
  components: {
    PostCard,
  },
  data() {
    return {
      post: null,
      isLoaded: true,
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://Localhost:8000/api/posts/" + this.$route.params.id)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.isLoaded = false;
        });
    },
  },
};
</script>

<style>
</style>