<template>
  <div class="spinner-cont">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.spinner-cont {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>