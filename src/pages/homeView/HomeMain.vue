<template>
  <div id="mainWrapper">
    <div id="mainBackground"></div>
    <div
      id="mainTextArea"
      class="is-flex is-flex-wrap-wrap is-align-items-end is-justify-content-center"
    >
      <div class="item">
        <h1>
          TRAVEL <br />
          BLOG <br />
          STORIES
        </h1>
      </div>
      <div class="item">
        <p>
          <span>Lorem ipsum dolor.</span> <br />sit amet consectetur adipisicing
          elit. Hic natus consequatur libero sint veniam atque? Vel enim,
          ducimus officia molestias, vero velit, error officiis id sequi
          voluptates eaque nesciunt. Dolorum officia quia tempore molestiae ad
          est! Vel voluptatem dolores repellat aperiam itaque. Esse, rem
          necessitatibus. Voluptatum accusantium asperiores nesciunt officia?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#mainWrapper {
  margin-top: 10%;
  width: 100%;
  min-height: fit-content;
}
#mainTextArea {
  background: #0e2a48;
  padding-bottom: 140px;
  padding-left: 12px;
  padding-right: 12px;
}

.item {
  flex: 1 1 350px;
}

#mainBackground {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='200' preserveAspectRatio='none' viewBox='0 0 1440 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1185%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c59 C 96%2c48.8 288%2c2 480%2c8 C 672%2c14 768%2c82.8 960%2c89 C 1152%2c95.2 1344%2c49 1440%2c39L1440 200L0 200z' fill='rgba(14%2c 42%2c 72%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c136 C 288%2c145.2 1152%2c172.8 1440%2c182L1440 200L0 200z' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1185'%3e%3crect width='1440' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 140px;
}
h1 {
  font-size: 4rem;
  line-height: 5rem;
  color: white;
  font-weight: bold;
  margin-left: 10vw;
  max-width: 70vw;
}

p {
  color: white;
  margin-right: 10vw;
  margin-left: 20px;
}

@media only screen and (max-width: 774px) {
  p {
    margin-left: 10vw;
  }
}

span {
  font-weight: bolder;
  font-size: 2.5rem;
}
</style>
