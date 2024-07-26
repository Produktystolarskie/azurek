<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { ref, defineProps } from "vue";

const props = defineProps({
  sectionHeight: Number,
});
</script>

<template>
  <div class="row elevated">
    <q-parallax
      class="col"
      src="https://d2yvmenv39glx3.cloudfront.net/images/f-105323-co-robi-stolarz-wszystko-o-uslugach-stolarskich.jpg"
      width="100%"
      :height="props.sectionHeight"
    >
      <div class="absolute-left q-pa-xl links">
        <h3>
          <router-link class="text-white" to="/oferty">
            Moja oferta <q-icon name="arrow_right" />
          </router-link>
        </h3>
      </div>
    </q-parallax>
  </div>
</template>

<style>
.links {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
