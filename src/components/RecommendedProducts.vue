<script setup lang="ts">
import { ref } from "vue";
import Item from "@/components/Item.vue";

const slide = ref("style");
</script>

<template>
  <div class="q-pa-sm recommended">
    <h2>Najnowsze</h2>
    <div class="row max-width">
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/4q6185kt70xp3-PL/image"
        name="Karmnik mały"
        price="80 zł"
        olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
        allegroURL="https://allegro.pl/"
        class="col-12 col-md"
      />
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/7svzscfu3tjn3-PL/image;s=1000x700"
        name="Stolik"
        price="50 zł"
        class="col-12 col-md"
        olxURL="link do olx"
        allegroURL="link do allegro"
      />
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/8n75uq0qxl6g1-PL/image;s=1000x700"
        name="Miniaturowy stolik piknikowy, ozdoba do domu"
        price="100 zł"
        class="col-12 col-md"
        olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
        allegroURL="https://allegro.pl/"
      />
    </div>
  </div>
</template>
<style >
.recommended {
  max-width: 400px;
  margin: 0 auto;
  
  h2 { 
    font-size: 2rem;
    color: var(--secondary)
  }
}

@media screen and (min-width: 1025px) {
  .recommended{
    max-width:1024px;

    h2 { 
      font-size:3.75rem
    }
  }
}
</style>
