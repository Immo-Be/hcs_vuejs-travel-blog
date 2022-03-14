<template>
  <span class="tag is-info is-light"> {{ start }} until {{ end }}</span>
</template>

<script>
export default {
  props: ["start", "end"],
};
</script>
