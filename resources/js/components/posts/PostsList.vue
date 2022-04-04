<template>
  <div class="container">
    <div class="row">
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
      isLoaded: true,
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://Localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
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
    this.getPosts();
  },
};
</script>

<style>
</style>