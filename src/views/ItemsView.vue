<script setup lang="ts">
import Item from "@/components/Item.vue";
import MainSection from "@/components/MainSection.vue";

import items from "@/assets/items.json"
</script>

<template>
  <main-section
    :sectionHeight="100"
    routeTo="/"
    routeToName="Strona główna"
    arrow="left"
  />
  
  <div class="items-container">
  <q-layout>
    <q-page-container class="q-pa-lg">
      <h2>Moja oferta</h2>
      <q-page class="items">
        <item v-for="item in items" :key="item.id"
          :id="item.id"
          :img="item.images[0]"
          :name="item.name"
          :price="item.price"
          :olxURL="item.olxURL"
          :allegroURL="item.allegroURL"
          class="col-12 col-md"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</div>
</template>

<style>
.q-layout {
  background-color: var(--primary);
}

.q-page {
  margin: 0 auto;
}

.items-container {
  max-width: 1024px;
  margin: 0 auto;
  color: var(--secondary)
}

.items {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1024px;
  
  h2 {
    font-size: 2rem;
    color: var(--secondary);
  }
}

@media screen and (min-width: 1025px) {
  .items {
    h2 {
      font-size: 3.75rem;
    }
  }
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
