<template>
  <!-- <div class="is-flex is-justify-content-center mb-4" id="editWrapper">
    <img src="src/assets/images/editIcon.png" alt="" />
    <button class="button is-danger is-light">Remove</button>
  </div> -->
  <!-- <footer class="card-footer"> -->
  <button
    id="editButton"
    @click="toggleModal"
    class="button is-info is-inverted"
  >
    <img src="../../assets/edit.svg" alt="" />
  </button>
  <div
    class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center is-align-items-flex-start"
  >
    <BlogPostDescriptionWeather :details="details" />

    <!-- <button style="width: 60%; margin-bottom: 12px" class="button">
      <img src="../../../assets/images/delete.svg" alt="" />
    </button> -->
  </div>
  <!-- <transition name="fade" appear> </transition> -->
  <PostFormModal
    @turnModalOff="toggleModal"
    v-if="showModal"
    :details="details"
    :showModal="showModal"
  />

  <!-- </footer> -->
</template>

<script>
import PostFormModal from "../../components/form/PostFormModal.vue";
import BlogPostDescriptionWeather from "./PostDescriptionFooterWeather.vue";

export default {
  emits: ["allDataUpdate"],
  props: ["details"],
  components: {
    PostFormModal,
    BlogPostDescriptionWeather,
  },
  data: function () {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
div {
  /* margin-top: 24px; */
  margin-top: 24px;
}

/* .button {
  width: 10%;
} */

#editButton {
  width: fit-content;
  margin-left: 80%;
}
.card-footer-item:hover {
  background-color: rgb(236, 236, 236);
}
/* 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
} */
</style>
