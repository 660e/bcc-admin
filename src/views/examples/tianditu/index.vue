<script lang="ts" name="tianditu" setup>
import { onMounted, ref } from 'vue';
import { T } from '@/utils/tianditu';

const map = ref();

onMounted(() => {
  map.value = new T.Map('map');
  map.value.centerAndZoom(new T.LngLat(116.40769, 39.89945), 12);
});
</script>

<template>
  <div class="card h-full" style="padding: 0">
    <div class="h-full" id="map"></div>
  </div>
</template>

<style lang="scss">
#map.tdt-container {
  .tdt-control-copyright {
    display: none;
  }
}
</style>
