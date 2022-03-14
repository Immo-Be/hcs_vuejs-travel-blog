<template>
  <div id="blogWrapper">
    <!-- <h2>This is were the posts go</h2>
    <button @click="clickedAddButton" style="height: 200px">
      Add new city
    </button>
    <button @click="clickedUpdateButton" style="height: 200px">
      Update city
    </button> -->
    <DashboardPostSectionCards :tripData="tripData" />
    <!-- {{ tripData }} -->
    <!-- v-for="(trip, index) in tripData" :key="index" -->
  </div>
</template>

<script>
// import WeatherAPI from "../../services/OpenWeatherAPI";
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
      //   API.updateTrip(this.info);
      WeatherAPI.loadDataFromWeatherAPI();
    },
  },
  //   mounted: function () {
  //     // alert("NOW ITS MOUNTED TOO");
  //   },
};
</script>

<style scoped>
#blogWrapper {
  /* border-right: #0e2a48 2px solid; */
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
