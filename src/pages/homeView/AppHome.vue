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

// import Main from "@/components/main/Main.vue";
// import Header from "@/components/main/Header.vue";
// import Dashboard from "@/components/main/Dashboard.vue";

export default {
  components: {
    HomeMain,
    HomeHeader,
    Dashboard,
  },

  // mounted: function () {
  //   console.log(window.pageXOffset);
  // },
};
</script>
