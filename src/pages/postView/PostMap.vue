<template>
  <div id="mapsDetailWrapper">
    <iframe
      loading="lazy"
      allowfullscreen
      :src="
        'https://www.google.com/maps/embed/v1/place?q=' +
        cityPlace +
        '&key=' +
        MAPS_API_KEY +
        '&zoom=6'
      "
    ></iframe>
    <!-- {{ city }} -->
  </div>
</template>

<script>
export default {
  props: ["city"],
  data: function () {
    return {
      MAPS_API_KEY: import.meta.env.VITE_MAPS_API_KEY,
      cityPlace: "Hamburg",
    };
  },

  watch: {
    city() {
      this.cityPlace = this.city;
    },
  },
};
</script>

<style scoped>
#mapsDetailWrapper {
  /* border-left: #0e2a48 2px solid; */
  width: 50%;
  box-sizing: border-box;
  flex: 1 1 450px;
  min-height: 70vh;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
