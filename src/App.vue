<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import Navbar from "./components/layout/TheNavbar.vue";
import Footer from "./components/layout/TheFooter.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
