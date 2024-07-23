<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { ref, defineProps } from "vue";

const props = defineProps({
    sectionHeight: Number
})

</script>

<template>
  <div class="row">
    <q-parallax
      class="col"
      src="@/assets/drwal.jpg"
      width="100%"
      :height="props.sectionHeight"
    >
      <template v-slot:media>
        <img src="@/assets/drwal.jpg" />
      </template>
      <template v-slot:content>
        <div class="absolute-left q-pa-xl links">
          <h3>
            <router-link class="text-white" to="/oferta">
              Moja oferta
            </router-link>
          </h3>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
