<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from '@/components/HeaderSection.vue'

</script>

<template>
  <main>
    <header-section />
    <router-view v-slot="{ Component, route }">
      <Transition name="slide" mode="out-in">
        <div :key="route.name">  
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
  </main>
</template>

<style>
.slide-enter-from,
.slide-leave-to {
	transform: translateX(-1%);
}

.slide-enter-active,
.slide-leave-active {
	transition: 0.0.5s linear;
}
</style>