<template>
  <div>
    <Loader v-if="isLoaded" />
    <PostCard v-if="post" :post="post" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";

export default {
  name: "PostDetail",
  components: {
    PostCard,
    Loader,
  },
  data() {
    return {
      post: null,
      isLoaded: true,
    };
  },
  methods: {
    getPost() {
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.slug)
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
  mounted() {
    this.getPost();
  },
};
</script>

<style>
</style>