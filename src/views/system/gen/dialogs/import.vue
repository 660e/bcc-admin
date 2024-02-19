<template>
  <el-dialog v-model="visible" @closed="closed" title="导入" class="no-card" draggable>
    <pro-table :columns="columns" :data="data" ref="proTableRef" />

    <template #footer>
      <div class="flex justify-end">
        <el-button @click="visible = false">取消</el-button>
        <el-button @click="confirm" type="primary">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" name="import-dialog" setup>
import { ref } from 'vue';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const $emit = defineEmits(['confirm']);

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

const proTableRef = ref();
const visible = ref(false);
const open = () => {
  visible.value = true;
};
const closed = () => {
  console.log('closed');
};
const confirm = () => {
  $emit('confirm', proTableRef.value.selectedListIds);
  visible.value = false;
};

defineExpose({ open });
</script>
