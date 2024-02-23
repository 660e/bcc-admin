<template>
  <el-dialog v-model="visible" @closed="closed" title="导入" align-center draggable>
    <div class="p-2.5">
      <pro-table :columns="columns" :request-api="getGenDbList" ref="tableRef" />
    </div>

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
import { getGenDbList } from '@/api/modules/code';

import ProTable from '@/components/pro-table/index.vue';

const $emit = defineEmits(['confirm']);

const columns: ColumnProps[] = [
  { type: 'selection', fixed: 'left', width: 0 },
  { prop: 'tableName', label: '表名称', search: { el: 'input' }, width: 180 },
  { prop: 'tableComment', label: '表描述', search: { el: 'input' } },
  { prop: 'createTime', label: '创建时间', width: 180 },
  { prop: 'updateTime', label: '更新时间', width: 180 }
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
