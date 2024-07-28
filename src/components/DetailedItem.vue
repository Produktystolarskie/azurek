<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from "vue";
import RefLink from "@/components/RefLink.vue";
import router from "@/router/index";
import items from "@/assets/items.json";

const props = defineProps({
  id: String,
});

const item = ref(items.find((i) => i.id == props.id));
const slide = ref(1);

if(item.value==null)
router.push("/")
</script>

<template>
  <div class="row justify-center q-gutter-lg">
    <q-intersection>
      <q-card
        class="q-pa-sm bg-transparent detailed"
        flat
        @click="router.push({ name: 'oferta', params: { id: 'sadds' } })"
      >
        <q-card-section>
          <q-img
            class="main-image rounded-borders"
            :src="item?.mainImage"
            :ratio="16 / 9"
          />
        </q-card-section>
        <q-card-section>
          <div>
            <h3 class="name">{{ item?.name }}</h3>
            <q-space />
            <div class="row items-center q-pa-lg">
              <h6>{{ item?.price }} zł</h6>
              <q-space />
              <ref-link
                class="bg-transparent"
                :olxURL="item?.olxURL"
                :allegroURL="item?.allegroURL"
                refLinkSize="large"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="inset-shadow">
          <div>
            <h3>Opis</h3>
            <h4 class="text-blue-10">{{item?.description}}</h4>
          </div>
          <div>
            <h3>Parametry</h3>
            <q-markup-table class="text-blue-10 bg-transparent" flat>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-right"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, key) in item?.params">
                  <td>{{ key }}</td>
                  <td class="text-right">{{ value }}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </q-card-section>
        <q-card-section class="inset-shadow">
          <div>
            <h3>Zdjęcia</h3>
            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
              arrows
              height="550px"
              class="max-width bg-transparent rounded-borders"
            >
              <q-carousel-slide
                v-for="(image, i) in item?.images"
                :name="i"
                :key="i"
                :img-src="image"
              />
            </q-carousel>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
</template>

<style scoped>
h5,
h6 {
  margin: 5px;
  font-weight: bold;
  line-height: 2;
}
h5.name {
  color: var(--accent);
  min-height: 6rem;
}
h6 {
  color: var(--secondary);
  font-size: 3rem;
  letter-spacing: 0.3rem;
}

.detailed {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 824px;
  margin: 0 auto;
}

@media screen and (min-width: 1025px) {
  .detailed {
    grid-template-columns: 2fr 1fr;
    max-width: 1224px;
  }
}

.q-markup-table {
  * {
    font-size: 30px;
    font-family: "Bebas Neue";
  }
}
</style>
