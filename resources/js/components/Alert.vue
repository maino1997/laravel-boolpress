<template>
  <div class="alert alert-success" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message", "type"],
};
</script>

<style>
</style>