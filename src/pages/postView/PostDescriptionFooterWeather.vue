<template>
  <div id="weatherWrapper">
    <span style="font-size: 1.2rem">Current local weather:</span> <br />
    <div id="weatherFlex">
      <div id="desriptionWrapper">
        <p style="font-size: 1.2rem">
          There are currently
          <span style="font-weight: bold; font-size: 1.2rem"
            >{{ maxTemp }}°C</span
          >
          in
          <span style="text-transform: capitalize; font-size: 1.2rem">{{
            city
          }}</span
          >: {{ weatherReaction() }}
        </p>
        <p>
          The weather can be described as
          <span style="font-weight: bold; font-size: 1.2rem">{{
            weatherDescription
          }}</span>
        </p>
      </div>
      <div id="iconWrapper">
        <img
          :src="'http://openweathermap.org/img/wn/' + icon + '@2x.png'"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
  data: function () {
    return {
      city: "",
      icon: "04d",
      maxTemp: "",
      weatherDescription: "",
    };
  },
  methods: {
    weatherReaction() {
      const data = this.maxTemp;
      if (data <= 10) {
        return "So chilly 🥶";
      } else if (data <= 18) {
        return "A bit chilly but still cool 🙈";
      } else if (data <= 26) {
        return "Ideal temperature if you ask me 😎";
      } else if (data >= 26) {
        return "This is just too hot too handle 🥵";
      }
    },
  },
  watch: {
    details() {
      this.city = this.details.city;
      this.icon = this.details.icon;
      this.maxTemp = this.details.max_temp;
      this.weatherDescription = this.details.weatherDescription;
    },
  },
};
</script>

<style scoped>
#weatherWrapper {
  margin-top: 36px;
  margin-bottom: 12px;
  border-radius: 20px;

  width: 100%;
  background-color: #0e2a48;
  box-sizing: border-box;
  color: white;
  padding: 16px;
}

#weatherFlex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

span:nth-child(1) {
  font-size: 1.6rem;
  font-weight: bolder;
}

#desriptionWrapper p {
  font-size: 1.2rem;
}

@media (max-width: 499px) {
  #weatherWrapper {
    padding: 36px;
  }
}
</style>
