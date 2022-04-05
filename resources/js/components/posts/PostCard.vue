<template>
  <div class="col-3">
    <div class="card" style="width: 18rem">
      <h5 class="card-title" v-if="post.user">
        {{ post.user.name }}
      </h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.content }}
        </p>
        <div class="cart-categories" v-if="post.category">
          {{ post.category.name }}
        </div>
        <div>
          <router-link
            class="btn btn-primary"
            :to="{
              name: 'post-detail',
              params: {
                id: post.id,
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

<style>
</style>