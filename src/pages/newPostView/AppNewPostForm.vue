<template>
  <div id="formPageWrapper">
    <AppArrow />
    <div id="formWrapper">
      <h1 class="title">Add a new Blog Post</h1>
      <h2 class="subtitle">
        Feel free to add your own trip to the list of mine!
      </h2>
      <PostForm />
    </div>
  </div>
</template>

<script>
import AppArrow from "../../components/ui/AppArrow.vue";
import PostForm from "../../components/form/PostForm.vue";
export default {
  components: {
    AppArrow,
    PostForm,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#formPageWrapper {
  flex: 1 1 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

#formWrapper {
  flex-basis: 90%;
  margin-right: 5rem;
  margin-left: 5rem;
}

@media (max-width: 499px) {
  #formWrapper {
    margin-left: 12px;
    margin-right: 12px;
  }
}
</style>
