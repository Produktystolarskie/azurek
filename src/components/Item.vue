<script setup lang="ts">
import { defineProps } from "vue";
import RefLink from "@/components/RefLink.vue";
import router from "@/router/index";

const props = defineProps({
  img: String,
  name: String,
  price: String,
  olxURL: String,
  allegroURL: String,
});
</script>

<template>
  <q-card
    class="q-pa-sm items-center bg-transparent"
    flat
    @click="router.push({ name: 'oferta', params: { id: 'sadds' } })"
  >
    <q-img class="q-pa-xs" :src="props.img" :ratio="9/16"> </q-img>
    <q-card-section>
      <div>
        <div>
          <h5 class="name">{{ props.name }}</h5>
          <div class="row items-center">
            <h6>{{ props.price }}</h6>
            <q-space />
            <ref-link
              class="bg-transparent"
              :olxURL="props.olxURL"
              :allegroURL="props.allegroURL"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
h5,
h6 {
  margin: 5px;
  font-weight: bold;
  line-height: 2;
}
h5.name {
  color: var(--accent);
  min-height: 6rem;
}
h6 {
  color: var(--secondary);
  font-size: 3rem;
  letter-spacing: 0.3rem;
}
</style>
