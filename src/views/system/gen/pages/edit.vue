<script lang="ts" name="edit-page" setup>
import { ref } from 'vue';

import InfoPane from './panes/info.vue';
import RowsPane from './panes/rows.vue';

const active = ref('rows');
</script>

<template>
  <div class="card h-full flex flex-col px-5">
    <el-tabs v-model="active" class="flex-1 flex flex-col h-0">
      <info-pane label="基本信息" name="info" />
      <rows-pane label="字段信息" name="rows" />
    </el-tabs>
    <div class="flex justify-center pb-5">
      <el-button>返回</el-button>
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>
