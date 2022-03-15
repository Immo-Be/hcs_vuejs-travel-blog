<template>
  <div class="planetWrapper">
    <img
      class="earth"
      src="../../assets/world.png"
      alt="Rotating World Image"
    />
    <div class="cometWarpper">
      <img
        class="comet"
        src="../../assets/comet.png"
        style="top: 100px"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.planetWrapper {
  top: 25px;
  display: flex;
  flex-flow: nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
}

.cometWarpper {
  display: flex;
  flex-direction: column;
}

.comet {
  width: 50px;
  z-index: 0;
  animation: myAnim 8s ease 0s 1 normal forwards;
  /* display: none; */
}

.earth {
  top: 20px;
  max-width: 80vw;
  background-repeat: no-repeat;
  margin: 0 auto !important;
  z-index: 1;
  animation: rotate 600s backwards linear infinite;
}

@media (min-width: 768px) {
  img {
    max-width: 50vw !important;
  }
}

@media (min-width: 1258px) {
  img {
    max-width: 40vw !important;
  }
}

/* ROTATION OF WOLRD */

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateX(-250px);
    display: block;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
