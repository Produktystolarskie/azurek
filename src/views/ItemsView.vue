<script setup lang="ts">
import Item from "@/components/Item.vue";
</script>

<template>
  <q-layout class="q-pa-lg">
    <router-link to="/">
      <q-icon name="arrow_back" class="text-black q-pa-md"  size="3rem" />
    </router-link>
    <q-page-container>
      <q-page class="items">
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
        price="100 zł"
        class="col-12 col-md"
        olxURL="https://www.olx.pl/d/oferta/doniczka-pociag-obduowa-dla-kwiatkow-CID628-ID11aFnO.html?bs=olx_pro_listing&isPreviewActive=0&sliderIndex=1"
        allegroURL="https://allegro.pl/"
   
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.q-layout {
  background-color: var(--primary);
  color: var(--white);
}

.q-page {
  margin: 0 auto;
}

.items {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1024px;
}

@media screen and (min-width: 684px) {
  .items {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1024px) {
  .items {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
