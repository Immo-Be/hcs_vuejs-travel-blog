<template>
  <div class="card" v-for="(trip, index) in tripData" :key="index">
    <div
      class="imageContainer"
      @click="$router.push({ path: '/post/' + index })"
    >
      <img id="tripImg" :src="tripData[index].img" />

      <div class="card-content">
        <div class="media">
          <figure class="image is-48x48">
            <img
              v-if="tripData[index].username === 'Immo'"
              style="min-width: 48px !important"
              src="../../../assets/immo.png"
              alt="Placeholder image"
            />
            <img
              v-else
              style="min-width: 48px !important"
              src="../../../assets/driver.png"
              alt="Placeholder image"
            />
          </figure>

          <div style="margin-left: 1rem; max-width: 80%" class="media-left">
            <p
              style="
                word-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis; // This is where the magic happens
              "
              class="title is-4"
            >
              {{ tripData[index].city }}, {{ tripData[index].country }}
            </p>
            <!-- <div class="media-left"> -->
            <p class="subtitle is-6">@{{ tripData[index].username }}</p>
            <!-- </div> -->
          </div>
        </div>
        <p style="text-align: center" class="title">
          {{ tripData[index].title }}
        </p>

        <div style="display: flex" class="content">
          <img
            style="margin-left: 12px"
            src="../../../assets/calendar.svg"
            alt=""
          />
          <p style="margin-left: 12px">
            {{ tripData[index].start }} -
            {{ tripData[index].end }}
          </p>
        </div>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    testFunction() {
      console.log("update received through destinationCard");
    },
  },

  props: ["tripData"],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-width: 40%;
  flex: 1 1 250px;

  border-radius: 20px;
  border: 1px solid #dee2e6 !important;
  margin: 6px 8px;
}

#tripImg {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 15rem !important;
  width: 100% !important;
  margin-bottom: 12px;
}

.textContainer {
  min-height: 120px;

  margin: 1rem;
  padding: 10px;
  min-width: 252px;
}

.textContainer span {
  font-weight: bolder;
}

.card:hover {
  opacity: 1;
  transform: scale(1.005);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.centered {
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  box-shadow: 5px -1px 16px -5px rgb(102, 101, 101) !important;
  background-color: #ffffff10 !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  font-size: 1rem;
  line-height: 1rem;
  padding: 3%;
  font-weight: bolder;
}
</style>
