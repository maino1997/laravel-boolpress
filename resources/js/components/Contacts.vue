<template>
  <section id="contacts">
    <h2>Contattaci</h2>
    <div class="form-group">
      <label for="mail">Email </label>
      <input
        type="email"
        class="form-control"
        id="mail"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary">Inivia</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style>
</style>