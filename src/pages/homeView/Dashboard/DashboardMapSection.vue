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
                src="../../../assets/immo.png"
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
  </div>
</template>

<script>
export default {
  props: ["tripData"],
  name: "App",
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
      this.tripPosition = id + 1;
    },
  },

  watch: {
    tripData() {
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
    };
  },
};
</script>
<style scoped>
#mapsWrapper {
  min-height: 80vh;
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
