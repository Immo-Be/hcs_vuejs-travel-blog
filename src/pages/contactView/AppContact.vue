<template>
  <div class="is-flex is-flex-wrap-wrap" id="contactWrapper">
    <ContactAuthorImg />
    <ContactField />
  </div>
</template>

<script>
import ContactAuthorImg from "./ContactAuthorImg.vue";
import ContactField from "./ContactField.vue";

export default {
  components: {
    ContactAuthorImg,
    ContactField,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
