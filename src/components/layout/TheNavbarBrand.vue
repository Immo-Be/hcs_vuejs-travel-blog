<template>
  <div class="navbar-brand">
    <div class="navbar-item" @click="$router.push({ path: '/' })">
      <img
        id="logo"
        src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/100/000000/external-travel-travel-wanicon-lineal-color-wanicon.png"
        height="40"
      />
    </div>
    <div @click="$router.push({ path: '/' })" class="navbar-item">
      Travel Blog Stories
    </div>

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
#logo {
  width: 40px !important;
  padding-left: 8px;
}
</style>
