<template>
  <div class="container">
    <section id="contacts">
      <Loader v-if="isLoading" />
      <Alert
        :message="alertMessage"
        :type="hasError ? 'danger' : 'success'"
        v-if="alertMessage || (hasError && !isLoading)"
        :errors="errors"
      >
      </Alert>
      <h2>Contattaci</h2>
      <div class="form-group">
        <label for="mail">Email </label>
        <input
          type="email"
          class="form-control"
          id="mail"
          placeholder="Enter email"
          v-model="form.mail"
          :class="{ 'is-invalid': errors.mail }"
        />
      </div>
      <div v-if="errors.mail" class="invalid-feedback">
        {{ errors.mail }}
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Inserisci il testo</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.message"
          :class="{ 'is-invalid': errors.mail }"
        ></textarea>
      </div>
      <div v-if="errors.message" class="invalid-feedback">
        {{ errors.message }}
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" @click="sendData()">Inivia</button>
      </div>
    </section>
  </div>
</template>

<script>
import Alert from "../Alert.vue";
import Loader from "../Loader.vue";
export default {
  name: "Contacts",
  components: {
    Alert,
    Loader,
  },
  computed: {
    hasError() {
      console.log("ecco lerrore", !!Object.keys(this.errors).length);
      return !!Object.keys(this.errors).length;
    },
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
      const errors = {};
      if (!this.form.mail.trim()) errors.mail = "La mail è obbligatoria";
      if (!this.form.message.trim()) errors.message = "Il testo è obbligatorio";
      if (!this.form.mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        errors.mail = "La mail inserita non è valida";

      this.errors = errors;

      if (!this.hasError) {
        this.isLoading = true;
        axios
          .post("http://localhost:8000/api/messages", this.form)
          .then((res) => {
            this.form.mail = "";
            this.form.message = "";
            this.alertMessage = "Messsaggio inviato";
          })
          .catch((err) => {
            console.log(err);
            this.errors = {
              error: "c'è stato un errore",
            };
          })
          .then(() => {
            this.isLoading = false;
          });
      } else {
      }
    },
  },
};
</script>

<style>
</style>