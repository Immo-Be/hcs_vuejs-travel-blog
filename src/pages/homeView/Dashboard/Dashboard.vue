<template>
  <div id="dashboardWrapper">
    <DashboardPostSection :tripData="result" />
    <DashboardMapSection :tripData="result" />
  </div>
</template>

<script>
import DashboardPostSection from "./DashboardPostSection.vue";
import DashboardMapSection from "./DashboardMapSection.vue";

import SERVER from "../../../services/Server";
// import WEATHER_API from "../../services/OpenWeatherAPI";

export default {
  data: function () {
    return {
      result: [],
    };
  },
  watch: {
    result() {},
  },

  // methods: {
  //   async initData() {
  //     this.result = await SERVER.getAllTrips();

  //     console.log(this.result);
  //   },
  // },
  components: {
    DashboardPostSection,
    DashboardMapSection,
  },
  created: async function () {
    console.log("Dashboard created");
    // await WEATHER_API.loadDataFromWeatherAPI();
    this.result = await SERVER.getAllTrips();
    // console.log("Dashboard created");
    // console.log("This was created");
    // console.log(result);
    // console.log(this.markers);
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
