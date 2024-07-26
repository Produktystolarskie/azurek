<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { ref } from "vue";

import RecommendedProducts from "@/components/RecommendedProducts.vue";
import MainSection from "@/components/MainSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";

const windowHeight = ref(window.innerHeight);
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <main-section :sectionHeight="100" routeTo='/oferty' routeToName="Moja oferta"/>
        <recommended-products />
        <about-section />
        <contact-section />
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
