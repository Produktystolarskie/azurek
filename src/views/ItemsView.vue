<script setup lang="ts">
import Item from "@/components/Item.vue";
</script>

<template>
  <q-layout class="q-pa-lg">
    <router-link to="/">
      <q-icon name="arrow_back" class="text-brown-14" size="2rem" />
    </router-link>
    <q-page-container>
      <q-page class="items">
        <item
          img="https://ireland.apollo.olxcdn.com/v1/files/4q6185kt70xp3-PL/image"
          name="Karmnik mały"
          price="80 zł"
          olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
          allegroURL="https://allegro.pl/"
        />
        <item
          img="https://cdn.quasar.dev/img/parallax2.jpg"
          name="Stolik"
          price="50 zł"
          olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
          allegroURL="https://allegro.pl/"
        />
        <item
          img="https://ireland.apollo.olxcdn.com/v1/files/4q6185kt70xp3-PL/image"
          name="Karmnik i stolik ozdobny"
          price="100 zł"
          olxURL="https://www.olx.pl/d/oferta/karmnik-i-stolik-ozdobny-CID628-ID1107wp.html?reason=seller_profile"
          allegroURL="https://allegro.pl/"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.q-layout {
  background-color: var(--buff);
}

.q-page {
  max-width: 1024px;
  margin: 0 auto;
}

.items {
  display: grid;
  grid-template-columns: 1fr;
}
@media screen and (min-width: 684px) {
  .items {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
