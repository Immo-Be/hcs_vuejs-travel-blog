<template>
  <div id="BackArrowWrapper" @click="this.$router.push({ path: '/' })">
    <img src="../../assets/arrow-left.svg" style="height: 30px; width: 30px" />
  </div>
</template>

<style scoped>
#BackArrowWrapper {
  flex-basis: 10%;
  padding: 12px;
  flex: 1 1 50px;
  height: fit-content;
  width: fit-content;
}

@media (max-width: 426px) {
  #BackArrowWrapper {
    margin-left: 5%;
  }
}
</style>
