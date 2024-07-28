<script setup lang="ts">
import { ref } from "vue";

import Item from "@/components/Item.vue";

import items from "@/assets/items.json"

const slide = ref("style");
</script>

<template>
  <div class="q-pa-lg recommended">
    <h2>Najnowsze</h2>
    <div class="row max-width">
      <item v-for="i in 3" :key="i"
          :id="items[i-1].id"
          :img="items[i-1].images[0]"
          :name="items[i-1].name"
          :price="items[i-1].price"
          :olxURL="items[i-1].olxURL"
          :allegroURL="items[i-1].allegroURL"
          class="col-12 col-md"
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
