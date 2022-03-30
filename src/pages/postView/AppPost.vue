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

import HEROKU_SERVER from "../../services/herokuServer";

export default {
  components: {
    PostDescription,
    PostMap,
  },
  data: function () {
    return {
      tripDetailPostion: this.$route.params.id,
      tripData: [],
      city: "",
      newData: [],
    };
  },

  updated() {
    this.emitter.on("emitnewTripInfo", async () => {
      this.tripData = await HEROKU_SERVER.getAllTrips();
      this.city = this.tripData[this.tripDetailPostion].city;
    });
  },

  created: async function () {
    this.tripData = await HEROKU_SERVER.getAllTrips();
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
