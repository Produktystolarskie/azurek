<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  olxURL: String,
  allegroURL: String,
  refLinkSize:{
    type: String,
    validator: (prop: string) => ['small', 'large'].includes(prop),
    default: 'small'
  }
});
</script>

<template>
  <div class="row">
    <a :href="props.olxURL">
      <div :class="'circle olx '+ props.refLinkSize">
        <img src="@/assets/olx.png" />
      </div>
    </a>
    <a :href="props.allegroURL">
      <div :class="'circle allegro '+ props.refLinkSize">
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
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.circle.small{
  width: 3rem;
  height: 3rem;
}
.circle.large{

  width: 5rem;
  height: 5rem;
}

.olx { 
  border-radius: 80% 0% 0% 80%;
}

.allegro { 
  border-radius: 0% 80% 80% 0%;
}
</style>
