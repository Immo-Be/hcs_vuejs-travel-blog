<template>
  <main class="is-flex is-flex-direction-column is-align-items-center">
    <HomeHeader />
    <HomeMain />
    <Dashboard />
  </main>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import HomeMain from "./HomeMain.vue";
import Dashboard from "./Dashboard/Dashboard.vue";

export default {
  components: {
    HomeMain,
    HomeHeader,
    Dashboard,
  },
};
</script>
