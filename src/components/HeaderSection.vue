<script setup lang="ts"></script>

<template>
  <header>
    <q-parallax
      class="col"
      src="https://d2yvmenv39glx3.cloudfront.net/images/f-105323-co-robi-stolarz-wszystko-o-uslugach-stolarskich.jpg"
      width="100%" 
      height="200"
    >
      <h1 class="text-h3">
        Produkty stolarskie
        <h2 class="text-h4">Artur Jurek</h2>
      </h1>
      
    </q-parallax>
    <div class="q-pa-sm links" reveal elevated>
      <h3>
        <router-link class="text-white" to="/oferty">
          Pełna oferta <q-icon name="arrow_right" />
        </router-link>
      </h3>
      
    </div>
  </header>
</template>

<style>
header {
  width: 100%; 
  background-color: var(--secondary);

  * {
    font-family: "Bebas Neue";
    color: var(--white);
  }
}

h1,
h2,
h5,
h3 {
  margin: 0;
  padding: 0;
}
</style>
