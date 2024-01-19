<template>
  <div class="flex items-center overflow-hidden whitespace-nowrap">
    <collapse-icon />
    <app-breadcrumb v-show="globalStore.breadcrumb" />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/modules/global';

import CollapseIcon from './components/collapse-icon.vue';
import AppBreadcrumb from './components/app-breadcrumb.vue';

const globalStore = useGlobalStore();
</script>
