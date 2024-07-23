<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  olxURL: String,
  allegroURL: String,
});
</script>

<template>
  <div class="col absolute-top-right">
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

<style scoped>
.circle {
  display: flex;
  justify-content: center;
  background-color: #1af8f0;
  align-items: center;
  padding: 8px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.olx {
  background-color: #24e6db;
  border-radius: 100% 20% 100% 100%;
}

.allegro {
  background-color: #ff5a00;
  border-radius: 100% 20% 100% 100%;
  margin-top: 10px;
}
</style>
