<template>
  <div id="mapsWrapper">
    <GMapMap :center="center" :zoom="4" map-type-id="terrain">
      <!-- <GMapCluster> -->
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="openMarker(m.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === m.id"
          style="text-align: center"
        >
          <div>
            <p style="margin-bottom: 12px">
              <strong>Preview window for {{ tripData[m.id].city }}</strong>
            </p>
            <p>{{ tripData[m.id].title }}</p>
            <p style="margin-bottom: 6px">
              Visited from {{ tripData[m.id].start }} until
              {{ tripData[m.id].end }} by
            </p>
            <div style="margin-bottom: 12px">
              <img
                id="authorImg"
                src="src/assets/immo.png"
                style="
                  width: 35px;
                  border-radius: 50%;
                  border: 1px solid #dee2e6;
                "
              />
              <p
                style="
                  display: inline;
                  bottom: 12px;
                  margin-left: 12px;
                  margin-bottom: 24px;
                "
              >
                {{ tripData[m.id].username }}
              </p>
            </div>
            <RouterLink :to="'/post/' + tripPosition"
              >Click here for more info</RouterLink
            >
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
    <!-- <button @click="showData">Show this.trip data</button> -->
  </div>

  <!-- :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position" -->
</template>

<script>
// import SERVER from "../../services/Server";
// import WEATHER_API from "../../services/OpenWeatherAPI";
export default {
  props: ["tripData"],
  name: "App",
  methods: {
    // showData() {
    //   console.log(this.tripData);
    // },
    openMarker(id) {
      this.openedMarkerID = id;
      this.tripPosition = id + 1;
    },
  },

  // async beforeCreate() {
  // await WEATHER_API.loadDataFromWeatherAPI();
  // },
  // mounted: async function () {
  //   console.log(this.tripData);
  //   console.log("Maps mounted");
  // await WEATHER_API.loadDataFromWeatherAPI();

  // const result = await SERVER.getAllTrips();
  // console.log("This was created");
  // console.log(result);
  // for (let i = 0; i < this.tripData.length; i++) {
  //   this.markers.push({
  //     id: i,
  //     position: {
  //       lat: this.tripData[i].lat,
  //       lng: this.tripData[i].lon,
  //     },
  //   });
  // }
  // console.log(this.markers);
  // },
  watch: {
    tripData() {
      // console.log("updateMarkers function was called");
      for (let i = 0; i < this.tripData.length; i++) {
        this.markers.push({
          id: i,
          position: {
            lat: this.tripData[i].lat,
            lng: this.tripData[i].lon,
          },
        });
      }
      this.center.lat = this.tripData[this.tripData.length - 1].lat;
      this.center.lng = this.tripData[this.tripData.length - 1].lon;
    },
  },
  data() {
    return {
      center: { lat: 0, lng: 0 },
      markers: [],
      openedMarkerID: null,
      tripPosition: null,
      // tripData: this.tripData,
    };
  },
};
</script>
<style scoped>
#mapsWrapper {
  min-height: 60vh;
  /* border-left: #0e2a48 2px solid; */
  width: 50%;
  box-sizing: border-box;
  flex: 1 1 450px;
}

@media only screen and (max-width: 450px) {
  #mapsWrapper {
    border: none;
  }
}

.vue-map-container {
  height: 100% !important;
}
</style>
