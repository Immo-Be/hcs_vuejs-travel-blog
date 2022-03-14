<template>
  <div
    @click="toggleNavbar"
    id="navbarId"
    class="navbar-menu"
    :class="{ ['is-active']: isShownValue }"
  >
    <div class="navbar-end">
      <RouterLink class="navbar-item" to="/">Home</RouterLink>
      <RouterLink class="navbar-item" to="/contact">Contact</RouterLink>

      <!-- <a class="navbar-item"> Documentation </a> -->

      <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div> -->

      <!-- <div class="navbar-end"> -->
      <div class="navbar-item">
        <div class="buttons">
          <div @click="$router.push({ path: '/new' })" class="button is-grey">
            <strong>New Post</strong>
          </div>
          <a class="button is-light"> Log in </a>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: ["isShownValue"],
  emits: ["clickedNavbarMenu"],
  methods: {
    toggleNavbar() {
      this.$emit("clickedNavbarMenu", this.isShownValue);
    },
  },
};
</script>

<style>
a:hover {
  color: rgb(14, 42, 72) !important;
}
.router-link-active {
  color: rgb(14, 42, 72) !important;
  font-weight: bold;
}
.button {
  border-radius: 20px;
}
</style>
