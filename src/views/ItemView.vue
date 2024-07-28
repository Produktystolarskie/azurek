<script setup lang="ts">
import DetailedItem from "@/components/DetailedItem.vue"
</script>
<template>
  <router-link to="/oferty">
    <q-icon name="arrow_back" class="text-black q-pa-md" size="3rem" />
  </router-link>
  <detailed-item
    :id="$route.params.id"
  />
</template>
