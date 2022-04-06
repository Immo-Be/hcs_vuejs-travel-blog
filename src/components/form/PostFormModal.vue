<template>
  <div style="z-index: 1" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Edit Info for trip to {{ cityValue.city }}
        </p>

        <button
          @click="toggleModalOff"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <PostForm @infoTripUpdate="updateTripInfo" :details="cityValue" />
      </section>
      <footer class="modal-card-foot">
        <button
          @click="updateTripToServer"
          class="button is-success"
          :class="{ 'is-loading': isLoading }"
        >
          Save changes
        </button>
        <button @click="toggleModalOff" class="button">Cancel</button>
        <button @click="toggleWarning" class="button is-danger">Delete</button>
      </footer>
    </div>
    <div
      style="z-index: 2"
      class="modal is-danger"
      :class="{ 'is-active': showWarning }"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <section class="hero is-danger">
          <div class="hero-body">
            <p class="title">Warning</p>
            <p class="subtitle">
              You are about to delete card #{{ cityValue.id }}. Proceed?
            </p>
            <div id="buttonWrapper" class="is-flex is-justify-content-center">
              <button
                @click="deleteTripFromServer"
                style="margin-right: 12px"
                class="button is-small"
              >
                Yes
              </button>
              <button
                @click="toggleWarning"
                style="margin-left: 12px"
                class="button is-small"
              >
                No
              </button>
            </div>
          </div>
        </section>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import HEROKU_SERVER from "../../services/herokuServer";

import PostForm from "./PostForm.vue";

export default {
  props: ["details", "showModal"],
  components: {
    PostForm,
  },

  emits: ["turnModalOff"],
  data: function () {
    return {
      modalStatus: false,
      newTripInfo: {},
      result: [],
      cityValue: {},
      showWarning: false,
      isLoading: false,
    };
  },
  created() {
    this.cityValue = { ...this.details, isShown: false };
  },
  updated: function () {
    console.log("compontent updated");
  },
  methods: {
    toggleModalOff() {
      this.modalStatus = !this.showModal;
      this.$emit("turnModalOff", this.modalStatus);
    },

    toggleWarning() {
      this.showWarning = !this.showWarning;
    },

    updateTripInfo(data) {
      this.newTripInfo = data;
    },

    async deleteTripFromServer() {
      alert("Deleted card succesfully");
      this.$router.push({ path: "/" });
      HEROKU_SERVER.deleteTrip(this.cityValue);
    },

    async updateTripToServer() {
      this.isLoading = true;
      await HEROKU_SERVER.updateTrip(this.newTripInfo);
      await this.emitter.emit("emitnewTripInfo");
      this.toggleModalOff();
    },
  },
};
</script>

<style scoped>
@media (max-width: 499px) {
  .is-active {
    margin-top: 50px;
  }
}
</style>
