<template>
  <div>
    <PostsList :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script>
import PostsList from "./posts/PostsList.vue";
export default {
  components: {
    PostsList,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios.get("http://Localhost:8000/api/posts").then((res) => {
        this.posts = res.data;
      });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
