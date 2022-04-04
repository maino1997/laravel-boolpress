<template>
  <div class="col-3">
    <div class="card" style="width: 18rem">
      <h5 class="card-title">{{ post.user.name }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.content }}
        </p>
        <div class="cart-categories">
          {{ post.category.name }}
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