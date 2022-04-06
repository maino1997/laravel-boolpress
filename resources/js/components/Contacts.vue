<template>
  <div class="container">
    <section id="contacts">
      <Loader v-if="isLoading" />
      <Alert :message="alertMessage" v-if="alertMessage" />
      <h2>Contattaci</h2>
      <div class="form-group">
        <label for="mail">Email </label>
        <input
          type="email"
          class="form-control"
          id="mail"
          placeholder="Enter email"
          v-model="form.mail"
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
          v-model="form.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" @click="sendData()">Inivia</button>
      </div>
    </section>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import Loader from "./Loader.vue";
export default {
  name: "Contacts",
  components: {
    Alert,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      alertMessage: "",
      form: {
        mail: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    sendData() {
      this.isLoading = true;
      axios
        .post("http://localhost:8000/api/messages", this.form)
        .then((res) => {
          this.form.mail = "";
          this.form.message = "";
          this.alertMessage = "Messsaggio inviato";
        })
        .catch((err) => {
          errors = {};
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>