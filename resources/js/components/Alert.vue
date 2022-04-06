<template>
  <div :class="'alert alert-' + type" role="alert">
    {{ message }}
    <ul v-if="errors">
      <li v-for="(value, key) in errors" :key="key">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message", "type", "errors"],
};
</script>

<style>
</style>