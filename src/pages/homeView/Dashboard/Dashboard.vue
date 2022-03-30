<template>
  <div id="dashboardWrapper">
    <DashboardPostSection :tripData="result" />
    <DashboardMapSection :tripData="result" />
  </div>
</template>

<script>
import DashboardMapSection from "./DashboardMapSection.vue";
import DashboardPostSection from "./DashboardPostSection.vue";

import HEROKU_SERVER from "../../../services/herokuServer";

export default {
  data: function () {
    return {
      result: [],
    };
  },
  watch: {
    result() {},
  },

  methods: {
    testFunction() {
      console.log("update received through destinationCard");
    },
  },

  components: {
    DashboardPostSection,
    DashboardMapSection,
  },
  async created() {
    this.result = await HEROKU_SERVER.getAllTrips();
    console.log(this.result);
    console.log("Dashboard created");
  },
  updated() {
    console.log("Dashboard updated");
  },
  unmounted() {
    console.log("Dashboard unmounted");
  },
};
</script>

<style>
#dashboardWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
