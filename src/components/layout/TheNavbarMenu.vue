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
      <div class="navbar-item">
        <div class="buttons">
          <div @click="$router.push({ path: '/new' })" class="button is-grey">
            <strong>New Post</strong>
          </div>
          <button class="button is-light is-disabled">Log in</button>
        </div>
      </div>
    </div>
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
