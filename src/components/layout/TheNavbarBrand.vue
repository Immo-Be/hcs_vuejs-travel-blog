<template>
  <div class="navbar-brand" @click="$router.push({ path: '/' })">
    <a class="navbar-item" href="#">
      <img
        id="logo"
        src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/100/000000/external-travel-travel-wanicon-lineal-color-wanicon.png"
        height="40"
      />
    </a>
    <a href="#" class="navbar-item">Travel Blog Stories</a>

    <a
      role="button"
      class="navbar-burger"
      :class="{ ['is-active']: isShownValue }"
      @click="toggleNavbarMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  emits: ["clickedBurger"],
  props: ["isShownValue"],
  methods: {
    toggleNavbarMenu() {
      this.isShown = !this.isShown;
      this.$emit("clickedBurger", this.isShown);
    },
  },
};
</script>

<style scoped>
/* a {
  height: fit-content;
} */
#logo {
  /* height: 40px !important;*/
  width: 40px !important;
  padding-left: 8px;
  /* border: black solid 2px; */
  /* height: 45px; */
  /* padding-left: 8px; */
}
/* .navbar-burger {
  margin-left: 0 !important;
} */

/* .navbar-brand {
  max-width: 100vw;
} */
</style>
