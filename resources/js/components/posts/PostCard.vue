<template>
  <div class="col-3 p-4">
    <div class="carta p-2">
      <h5 class="card-title" v-if="post.user">Autore: {{ post.user.name }}</h5>
      <div class="card-body">
        <h5 class="card-title">Titolo: {{ post.title }}</h5>
        <p class="card-text">
          {{ post.content }}
        </p>
        <span
          v-if="post.category"
          class="badge badge-pill"
          :class="`badge-${post.category.color}`"
          >{{ post.category.name }}</span
        >
        <div v-for="tag in post.tags" :key="tag.id">
          <span class="badge badge-pill" :class="`badge-${tag.color}`">{{
            tag.name
          }}</span>
        </div>
        <div>
          <router-link
            class="btn btn-primary"
            :to="{
              name: 'post-detail',
              params: {
                slug: post.slug,
              },
            }"
          >
            Vedi
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style lang='scss' scoped>
.col-3 {
  padding: 20px;
  .carta {
    margin: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 300px;
  }
}
</style>