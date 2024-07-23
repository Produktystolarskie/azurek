<script setup lang="ts">
import { defineProps } from "vue";
import RefLink from "@/components/RefLink.vue";

const props = defineProps({
  img: String,
  name: String,
  price: String,
  olxURL: String,
  allegroURL: String
});
</script>

<template>
  <q-card class="q-ma-lg bg-transparent" flat>
    <q-img :src="props.img" ratio="1">
      <ref-link class="absolute-top-right bg-transparent" :olxURL="props.olxURL" :allegroURL="props.allegroURL" />
    </q-img>
    <q-card-section>
      <div>
        <div>
          <h5 class="flex">{{ props.name }}</h5>
          <h6>{{ props.price }}</h6>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
q-card {
  min-width: 300px;
}
</style>
