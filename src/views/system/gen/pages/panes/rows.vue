<script lang="ts" name="rows-pane" setup>
import { ref } from 'vue';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const data = ref([
  { id: '001', name: 'TEST-G-001' },
  { id: '002', name: 'TEST-G-002' }
]);
const columns: ColumnProps[] = [
  { prop: 'name', label: '表名称' },
  { prop: 'description', label: '表描述' },
  { prop: 'substance', label: '实体' },
  { prop: 'creationTime', label: '创建时间' },
  { prop: 'updateTime', label: '更新时间' }
];
</script>

<template>
  <el-tab-pane v-bind="$attrs" class="h-full no-card">
    <pro-table :data="data" :columns="columns" :pagination="false"></pro-table>
  </el-tab-pane>
</template>

<style lang="scss" scoped>
.no-card :deep(.table-main) {
  padding: 20px 0;
}
</style>
