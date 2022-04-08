<template>
  <div class="container">
    <div class="row">
      <Loader v-if="isLoaded" />
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" v-if="pagination.CurrentPage > 1">
            <span
              class="page-link"
              @click="getPosts(pagination.CurrentPage - 1)"
              >Previous</span
            >
          </li>
          <li
            class="page-item"
            v-for="page in pagination.LastPage"
            :key="page"
            @click="getPosts(page)"
          >
            <span class="page-link">{{ page }}</span>
          </li>
          <li
            class="page-item"
            v-if="pagination.LastPage > pagination.CurrentPage"
          >
            <span
              class="page-link"
              @click="getPosts(pagination.CurrentPage + 1)"
              >Next</span
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";

export default {
  components: {
    PostCard,
    Loader,
  },
  data() {
    return {
      posts: [],
      isLoaded: false,
      pagination: {},
    };
  },

  methods: {
    getPosts(page) {
      this.isLoaded = true;
      axios
        .get("http://Localhost:8000/api/posts?page=" + page)
        .then((res) => {
          const { data, current_page, last_page } = res.data;
          this.posts = data;

          this.pagination = {
            LastPage: last_page,
            CurrentPage: current_page,
          };
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