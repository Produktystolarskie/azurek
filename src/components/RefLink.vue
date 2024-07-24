<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  olxURL: String,
  allegroURL: String,
});
</script>

<template>
  <div class="row">
    <a :href="props.olxURL">
      <div class="circle olx">
        <img src="@/assets/olx.png" />
      </div>
    </a>
    <a :href="props.allegroURL">
      <div class="circle allegro">
        <img src="@/assets/allegro.png" />
      </div>
    </a>
  </div>
</template>

<style> 
.circle {
  display: flex;
  justify-content: center;
  background-color: var(--secondary);
  align-items: center;
  padding: 8px;
  margin:2px;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.olx { 
  border-radius: 80% 0% 0% 80%;
}

.allegro { 
  border-radius: 0% 80% 80% 0%;
}
</style>
