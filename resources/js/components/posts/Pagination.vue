<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-if="pagination.CurrentPage > 1">
        <span
          class="page-link"
          role="button"
          @click="$emit('recievePosts', pagination.CurrentPage - 1)"
          >Previous</span
        >
      </li>
      <li
        class="page-item"
        role="button"
        v-for="page in pagination.LastPage"
        :key="page"
        @click="$emit('recievePosts', page)"
      >
        <span class="page-link">{{ page }}</span>
      </li>
      <li class="page-item" v-if="pagination.LastPage > pagination.CurrentPage">
        <span
          role="button"
          class="page-link"
          @click="$emit('recievePosts', pagination.CurrentPage + 1)"
          >Next</span
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Paginate",
  props: ["pagination"],
};
</script>

<style>
</style>