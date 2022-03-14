<template>
  <nav
    id="navbarFixed"
    class="navbar is-white is-fixed-top is-transparent"
    role="navigation"
    style="max-width: 100vw"
  >
    <TheNavbarBrand @clickedBurger="toggleNavbarMenu" :isShownValue="isShown" />
    <TheNavbarMenu
      @clickedNavbarMenu="untoggleNavbarMenu"
      :isShownValue="isShown"
    />
  </nav>
</template>

<script>
import TheNavbarBrand from "./TheNavbarBrand.vue";
import TheNavbarMenu from "./TheNavbarMenu.vue";
export default {
  data: function () {
    return {
      isShown: false,
    };
  },
  components: {
    TheNavbarBrand,
    TheNavbarMenu,
  },
  methods: {
    toggleNavbarMenu(value) {
      //   this.isShown = !this.isShown;
      this.isShown = value;
    },
    untoggleNavbarMenu(value) {
      //   this.isShown = !this.isShown;
      this.isShown = !value;
    },
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        navbarFixed.classList.add("move");
        navbarFixed.classList.add("has-shadow");
      } else {
        navbarFixed.classList.remove("move");
        navbarFixed.classList.remove("has-shadow");
      }
    };
  },
};
</script>

<style scoped>
.move {
  box-shadow: 5px -1px 12px -5px grey !important;
  background-color: #ffffff10 !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
