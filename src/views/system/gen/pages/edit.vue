<script lang="ts" name="edit-page" setup>
import { ref } from 'vue';

import InfoPane from './panes/info.vue';
import RowsPane from './panes/rows.vue';
import GeneratePane from './panes/generate.vue';

const active = ref('info');
</script>

<template>
  <el-tabs v-model="active" class="card h-full flex flex-col px-5 pb-5">
    <info-pane label="基本信息" name="info" />
    <rows-pane label="字段信息" name="rows" />
    <generate-pane label="生成信息" name="generate" />
  </el-tabs>
</template>
