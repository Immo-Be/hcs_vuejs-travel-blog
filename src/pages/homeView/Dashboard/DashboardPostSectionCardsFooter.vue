<template>
  <footer class="card-footer">
    <div class="card-footer-item">
      <img src="../../assets/images/edit.svg" alt="" />
    </div>
    <div class="card-footer-item">
      <img src="../../assets/images/delete.svg" alt="" />
    </div>
  </footer>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style scoped>
button {
  border-radius: 15px;
}
.card-footer-item:nth-child(1) {
  color: rgb(14, 42, 72);
  border-bottom-left-radius: 20px;
}
.card-footer-item:nth-child(2) {
  color: rgb(14, 42, 72);
  border-bottom-right-radius: 20px;
}
.card-footer-item:hover {
  background-color: rgb(236, 236, 236);
}
</style>
