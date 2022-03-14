<template>
  <div class="is-flex is-flex-wrap-wrap" id="contactWrapper">
    <!-- <h1>This page is about me</h1> -->
    <ContactAuthorImg />
    <ContactField />
  </div>
</template>

<script>
import ContactAuthorImg from "./ContactAuthorImg.vue";
import ContactField from "./ContactField.vue";

export default {
  components: {
    ContactAuthorImg,
    ContactField,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* #contactWrapper {
  display: flex; */
/* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='560' preserveAspectRatio='none' viewBox='0 0 2000 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M1731.832142965404 638.0984758391605L1841.3775065380974 546.1790016681325 1749.4580323670693 436.6336380954392 1639.912668794376 528.5531122664672z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1004.6252495442889 335.00312726290315L952.5106106804544 470.7664030775447 1088.2738864950961 522.8810419413791 1140.3885253589303 387.11776612673754z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1188.5905749149222 458.0621023507007L1032.4568853064043 482.63874092502556 1117.5203169753065 591.5149684952645z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M569.0157316168736 103.45444981576864L567.5202389633484 17.777733076231968 481.8435222238118 19.273225729757087 483.3390148773369 104.94994246929376z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1556.3354227903899 267.250389031118L1646.5447873082496 294.83015951911597 1674.1245577962477 204.62079500125617 1583.915193278388 177.0410245132582z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M116.44263628513593 296.71902661526104L116.44263628513598 455.0533247114427 274.77693438131763 455.05332471144266 274.7769343813176 296.719026615261z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1039.23 492.34 a166.84 166.84 0 1 0 333.68 0 a166.84 166.84 0 1 0 -333.68 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M652.9355982436348 92.27282212644218L570.8225656077911 139.68080362272303 618.230547104072 221.7938362585666 700.3435797399156 174.38585476228576z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1484.5447301223096 331.6329812650325L1535.1813888589284 240.28203073679038 1393.1937795940676 280.9963225284138z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M122.35 230.54 a102.41 102.41 0 1 0 204.82 0 a102.41 102.41 0 1 0 -204.82 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M170.89 411.38 a129.7 129.7 0 1 0 259.4 0 a129.7 129.7 0 1 0 -259.4 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M88.59122773873298 535.5920257460651L-0.5797604396827012 493.907404496479 5.422505096281711 579.74380071047z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='2000' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"); */
/* } */
</style>
