<template>
  <div id="BlogPostWrapper">
    <AppArrow />

    <div id="contentWrapper">
      <div id="contentInfoWrapper">
        <div style="margin-top: 20px; margin-bottom: 24px">
          <img
            src="../../assets/marker.png"
            style="height: 60px; width: 60px"
          />
          <p
            style="
              display: inline;
              bottom: 10px;
              font-size: 2rem;
              text-transform: capitalize;
            "
          >
            {{ city }}, {{ country }}
          </p>
        </div>
        <img :src="img" alt="" />
        <div id="tagSection">
          <Username :user="username" />
          <Date :start="start" :end="end" />
        </div>

        <h2>{{ title }}</h2>
        <br />

        <br />
        <p class="description">{{ description }}</p>
      </div>
      <PostDescriptionFooter :details="details" />
    </div>
  </div>
</template>

<script>
// import SERVER from "../../../services/Server";

import PostDescriptionFooter from "./PostDescriptionFooter.vue";
import AppArrow from "../../components/ui/AppArrow.vue";
import Date from "../../components/ui/AppDate.vue";
import Username from "../../components/ui/AppUser.vue";

export default {
  components: {
    AppArrow,
    PostDescriptionFooter,
    Date,
    Username,
  },
  props: ["details", "position"],
  data: function () {
    return {
      city: "",
      title: "",
      start: "",
      end: "",
      description: "",
      start: "",
      username: "",
      img: "",
      country: "",
      tripData: [],
    };
  },

  watch: {
    details() {
      this.city = this.details.city;
      this.title = this.details.title;
      this.start = this.details.start;
      this.end = this.details.end;
      this.description = this.details.description;
      this.start = this.details.start;
      this.username = this.details.username;
      this.img = this.details.img;
      this.country = this.details.country;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bolder;
}

#tagSection {
  margin-top: 12px;
  margin-bottom: 12px;
}

#tagSection span:nth-child(1) {
  margin-right: 24px;
}

#BlogPostWrapper {
  width: 50%;
  box-sizing: border-box;
  flex: 1 1 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

#contentWrapper {
  flex-basis: 90%;
  box-sizing: border-box;
  height: fit-content;
  padding-right: 24px;
  display: flex;
  flex-flow: column;
  padding-top: 36px;
}

#contentWrapper > img {
  border-radius: 20px;
  margin-bottom: 20px;
}

.author {
  font-size: 1.5rem;
}

.description {
  font-size: 1.2rem;
}

@media (max-width: 499px) {
  #contentWrapper {
    padding-left: 12px;
    padding-top: 0;
  }
}

@media (min-width: 900px) {
  #contentWrapper {
    padding-left: 46px;
    padding-right: 46px;
    padding-top: 0;
  }
}

@media (min-width: 1000px) {
  #contentWrapper {
    padding-left: 0px;
    padding-right: 5%;
    padding-top: 36px;
  }
}
</style>
