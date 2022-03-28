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
        city: "Kiel",
        start: "2015-06-30",
        end: "2015-07-29",
        description:
          "Hongkong lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque aliquid magnam sed in inventore cupiditate assuma, delectus consectetur recusandae, tempore, aspernatur quia. Praesentium dolorum harum, enim incidunt non fuga.",
        username: "Immo",
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
