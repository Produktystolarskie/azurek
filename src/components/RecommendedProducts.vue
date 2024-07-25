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
        img="https://ireland.apollo.olxcdn.com/v1/files/rw3llkmthvne-PL/image;s=1000x700"
        name="Karmnik "
        price="60 zł"
        olxURL="https://www.olx.pl/d/oferta/karmnik-dla-ptakow-CID103-ID11aNN6.html?bs=olx_pro_listing&isPreviewActive=0&sliderIndex=0"
        allegroURL="https://allegro.pl/"
        class="col-12 col-md"
      />
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/7svzscfu3tjn3-PL/image;s=1000x700"
        name="Stolik"
        price="50 zł"
        class="col-12 col-md"
        olxURL="https://www.olx.pl/d/oferta/miniaturowy-stolik-piknikowy-ozdoba-do-domu-CID628-ID119wzw.html?bs=olx_pro_listing"
        allegroURL="link do allegro"
      />
      <item
        img="https://ireland.apollo.olxcdn.com/v1/files/lumryc4b08gr3-PL/image;s=1000x700"
        name="Doniczka typu pociag"
        price="180 zł"
        class="col-12 col-md"
        olxURL="https://www.olx.pl/d/oferta/doniczka-pociag-obduowa-dla-kwiatkow-CID628-ID11aFnO.html?bs=olx_pro_listing&isPreviewActive=0&sliderIndex=1"
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
