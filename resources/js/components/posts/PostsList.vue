<template>
  <div class="container">
    <div class="row">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  props: ["post"],
};
</script>

<style>
</style>