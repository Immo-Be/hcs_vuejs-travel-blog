<template>
  <section class="section">
    <h1 style="margin-top: 12px" class="title">
      Welcome to my travel blog, fellow traveler!
    </h1>
    <h2 style="margin-top: 12px" class="subtitle">
      My name is Immo and I am an marketeer gone coding. This travel blog is
      part of my final project at the
      <strong>Hamburg Coding School.</strong> There is a lot to see and do so
      play around with the features
    </h2>
    <h2 class="subtitle">
      This website is built using Vue.js as a javascript framework. It also
      takes advantage of the power of the Bulma CSS framework. The backend
      powered by node.js is hosted on heroku and is connected to a mySQL
      database. So feel free to CRUD all trips 😉. If you have any inquires,
      comments or just want to hire me, feel free to use the
      <strong>form below</strong> (you can literally do so, it literally works
      for real... no drill)
    </h2>

    <ContactFieldForm />
  </section>
</template>

<script>
import ContactFieldForm from "./ContactFieldForm.vue";
export default {
  components: {
    ContactFieldForm,
  },
};
</script>

<style scoped>
.section {
  margin-left: 0;
}
@media (min-width: 768px) {
  .section {
    max-width: 50vw;
    margin-left: 2rem;
  }
}
</style>
