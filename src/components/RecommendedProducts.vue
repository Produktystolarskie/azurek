<script setup lang="ts">
import { ref } from "vue";
import Item from "@/components/Item.vue";

const slide = ref("style");
</script>

<template>
  <div class="q-pa-xl text-white bg-secondary">
    <h2>Najnowsze</h2>
    <div class="row max-width">
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/4q6185kt70xp3-PL/image"
        name="Karmnik mały"
        price="80 zł"
        olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
        allegroURL="https://allegro.pl/"
        class="col-10 col-sm"
        
      />
      <item
        img="https://cdn.quasar.dev/img/parallax2.jpg"
        name="Stolik"
        price="50 zł"
        class="col-10 col-sm"
        olxURL="link do olx"
        allegroURL="link do allegro"
      />
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/4q6185kt70xp3-PL/image"
        name="Karmnik i stolik ozdobny"
        price="100 zł"
        class="col-10 col-sm"
        olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
        allegroURL="https://allegro.pl/"
      />
    </div>
  </div>
</template>
<style scoped>
h2 {
  font-family: "Michroma";
  font-size: 2rem;
}

@media screen and (min-width: 624px) {
  h2 {
    font-size: 3.75rem;
  }
}
</style>
