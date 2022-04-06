<template>
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Your name"
        v-model="city.username"
        @change="updateTrip"
      />
    </div>
  </div>

  <div class="field">
    <label class="label">City</label>
    <div class="control">
      <input
        v-model="city.city"
        class="input"
        type="text"
        placeholder="Visited city"
        @change="updateTrip"
      />
    </div>
  </div>

  <div class="field">
    <label class="label">Title</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Give your post a cool sounding title"
        v-model="city.title"
        @change="updateTrip"
      />
    </div>
  </div>

  <div class="is-flex is-flex-wrap-wrap" id="dateWrapper">
    <div style="width: 50%; flex: 1 1 250px" class="field mr-1">
      <label class="label">Start Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Give your post a cool sounding title"
          v-model="city.start"
          @change="updateTrip"
        />
      </div>
    </div>

    <div style="width: 50%; flex: 1 1 250px" class="field ml-1">
      <label class="label">End Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Give your post a cool sounding title"
          v-model="city.end"
          @change="updateTrip"
        />
      </div>
    </div>
  </div>

  <div class="field">
    <label class="label">Description</label>
    <div class="control">
      <textarea
        v-model="city.description"
        class="textarea"
        placeholder="The trip was awesome!"
        @change="updateTrip"
      ></textarea>
    </div>
  </div>

  <div class="field">
    <label class="label">URL for Image</label>
    <div class="control">
      <input
        v-model="city.img"
        class="input"
        type="text"
        placeholder="http://example/image.png"
        @change="updateTrip"
      />
    </div>
  </div>
  <p style="margin-bottom: 12px" class="help">
    If you want, you can provide a URL for an image of your trip. You can find
    stock images <a href="https://pixabay.com/de/" target="_blank">here</a> 🙂
  </p>

  <div v-show="city.isShown === undefined" class="field is-grouped">
    <div class="control">
      <button @click="sendUserInputToServer" class="button is-link">
        Submit
      </button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>

<script>
import HEROKU_SERVER from "../../services/herokuServer";
export default {
  emits: ["infoTripUpdate"],
  props: {
    details: {
      type: Object,

      default(rawProps) {
        return {};
      },
    },
  },
  data: function () {
    return {
      trips: [],
      city: {
        city: "",
        start: "",
        end: "",
        description: "",
        username: "",
        mood: null,
        title: "",
        img: "",
        id: "",
        isShown: true,
      },
    };
  },
  mounted() {
    this.city.city = this.details.city;
    this.city.start = this.details.start;
    this.city.end = this.details.end;
    this.city.description = this.details.description;
    this.city.username = this.details.username;
    this.city.mood = this.details.mood;
    this.city.title = this.details.title;
    this.city.img = this.details.img;
    this.city.id = this.details.id;
    this.city.isShown = this.details.isShown;
  },
  methods: {
    sendUserInputToServer() {
      HEROKU_SERVER.addTrip(this.city);
      this.clearForm();
      alert("User data successfully added!");
      this.$router.push({ path: "/" });
    },
    clearForm() {
      this.city.city = "";
      this.city.start = "";
      this.city.end = "";
      this.city.description = "";
      this.city.username = "";
      this.city.mood = "";
      this.city.title = "";
      this.city.img = "";
    },
    updateTrip() {
      this.$emit("infoTripUpdate", this.city);
    },
  },
};
</script>
