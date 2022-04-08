<template>
  <div class="container">
    <div class="row">
      <Loader v-if="isLoaded" />
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
      <!-- Al componente Pagination passo la prop l'oggetto pagination in cui ho i dati delle pagine,
      poi all'evento dell'emit del componente richiamo il metodo getPosts() perchè gli passo sotto
      il parametro page da passare poi nella chiamata Axios come parametro in Query String, che poi 
      verrà letto in automatico dall'ApiController dei Posts di Laravel che restituirà come risposta
      della chiamata API i post già paginati come scritto nel controller con ->paginate() con già tutti
      i dati che mi servono per la paginazione  -->
      <Pagination
        :pagination="pagination"
        @recievePosts="getPosts"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";
import Pagination from "./Pagination.vue";

export default {
  components: {
    PostCard,
    Loader,
    Pagination,
  },
  data() {
    return {
      posts: [],
      isLoaded: false,
      pagination: {},
    };
  },

  methods: {
    getPosts(page = 1) {
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