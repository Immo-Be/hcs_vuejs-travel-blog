<template>
  <div id="blogPostDetailWrapper">
    <PostDescription
      :details="tripData[tripDetailPostion]"
      :position="tripDetailPostion"
    />
    <PostMap :city="city" />
  </div>
</template>

<script>
import PostDescription from "./PostDescription.vue";
import PostMap from "./PostMap.vue";

import SERVER from "../../services/herokuServer";
// import WEATHER_API from "../services/OpenWeatherAPI";

export default {
  components: {
    PostDescription,
    PostMap,
  },
  data: function () {
    return {
      tripDetailPostion: this.$route.params.id - 1,
      tripData: [],
      city: "",
      newData: [],
    };
  },

  // watch: {
  //   tripData() {
  //     this.tripData;
  //   },
  // },
  updated() {
    // console.log("BlogPostDetail Updated");
    this.emitter.on("emitnewTripInfo", async () => {
      // console.log(result[1]);
      // this.tripData = result[1];
      // console.log(this.result);
      // await WEATHER_API.loadDataFromWeatherAPI();
      this.tripData = await SERVER.getAllTrips();
      // console.log(this.tripData[this.tripDetailPostion].city);
      this.city = this.tripData[this.tripDetailPostion].city;

      // console.log("testEmit works");
    });
    // this.tripData[this.tripDetailPostion];
  },
  // methods: {
  //   async initData() {
  //     this.tripData = await SERVER.getAllTrips();
  //     console.log(this.tripData);
  //     // console.log(this.tripData[this.tripDetailPostion].city);
  //     this.city = this.tripData[this.tripDetailPostion].city;
  //   },
  // },
  created: async function () {
    this.tripData = await SERVER.getAllTrips();
    // console.log(this.tripData[this.tripDetailPostion].city);
    this.city = this.tripData[this.tripDetailPostion].city;
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#blogPostDetailWrapper {
  width: 100%;
  /* background-color: aquamarine; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
