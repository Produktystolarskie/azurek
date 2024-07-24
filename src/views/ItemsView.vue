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
