<template>
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
  </div>
  <PostFormModal
    @turnModalOff="toggleModal"
    v-if="showModal"
    :details="details"
    :showModal="showModal"
  />
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
  margin-top: 24px;
}

#editButton {
  width: fit-content;
  margin-left: 80%;
}
.card-footer-item:hover {
  background-color: rgb(236, 236, 236);
}
</style>
