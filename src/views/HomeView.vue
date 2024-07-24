<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { ref } from "vue";

import RecommendedProducts from "@/components/RecommendedProducts.vue";
import MainSection from "@/components/MainSection.vue";
import AboutSection from "@/components/AboutSection.vue";

const windowHeight = ref(window.innerHeight);
</script>

<template>
  <q-layout>
    <q-page-container
      ><q-page>
        <main-section :sectionHeight="150"/>
        <recommended-products />
        <about-section />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
a {
  text-decoration: none;
  transition: 250ms;
}
</style>
