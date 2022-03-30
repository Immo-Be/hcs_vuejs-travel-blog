<template>
  <div id="blogWrapper">
    <DashboardPostSectionCards :tripData="tripData" />
  </div>
</template>

<script>
import DashboardPostSectionCards from "./DashboardPostSectionCards.vue";

export default {
  props: ["tripData"],
  components: {
    DashboardPostSectionCards,
  },
  data: function () {
    return {
      trips: [],
      city: {
        city: "",
        start: "",
        end: "",
        description: "",
        username: "",
        mood: null,
      },
    };
  },
  methods: {
    async clickedAddButton() {
      const result = await API.addTrip(this.city);
    },
    async clickedUpdateButton() {
      WeatherAPI.loadDataFromWeatherAPI();
    },
  },
};
</script>

<style scoped>
#blogWrapper {
  width: 50%;
  box-sizing: border-box;
  flex: 1 1 450px;
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-width: 450px) {
  #blogWrapper {
    border: none;
  }
}
</style>
