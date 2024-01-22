<script lang="ts" name="import-dialog" setup>
import { ref } from 'vue';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const dialogVisible = ref(false);

const data = ref([
  { id: '001', name: 'TEST-G-001' },
  { id: '002', name: 'TEST-G-002' }
]);
const columns: ColumnProps[] = [
  { type: 'selection', fixed: 'left', width: 0 },
  { prop: 'name', label: '表名称', search: { el: 'input' } },
  { prop: 'description', label: '表描述', search: { el: 'input' } },
  { prop: 'creationTime', label: '创建时间' },
  { prop: 'updateTime', label: '更新时间' }
];

const open = () => {
  dialogVisible.value = true;
};

defineExpose({ open });
</script>

<template>
  <el-dialog v-model="dialogVisible" title="导入">
    <pro-table :columns="columns" :data="data" />
  </el-dialog>
</template>
