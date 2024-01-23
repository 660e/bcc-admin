<script lang="ts" name="gen-manage" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';
import ImportDialog from './dialogs/import.vue';

const data = ref([
  { id: '001', name: 'TEST-G-001' },
  { id: '002', name: 'TEST-G-002' }
]);
const columns: ColumnProps[] = [
  { type: 'selection', fixed: 'left', width: 0 },
  { prop: 'name', label: '表名称', search: { el: 'input' } },
  { prop: 'description', label: '表描述', search: { el: 'input' } },
  { prop: 'substance', label: '实体' },
  { prop: 'creationTime', label: '创建时间' },
  { prop: 'updateTime', label: '更新时间' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 0 }
];

const importDialogRef = ref();
const importData = () => {
  importDialogRef.value.open();
};
const importDataConfirm = (ids: string[]) => {
  console.log(ids);
};
const batchDelete = (ids: string[]) => {
  console.log(ids);
};

const $router = useRouter();
const edit = (id: string) => {
  $router.push({ name: 'gen-edit', params: { id } });
};
</script>

<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :data="data">
      <template #tableHeader="scope">
        <el-button @click="importData">导入</el-button>
        <el-button @click="batchDelete(scope.selectedListIds)">删除</el-button>
      </template>
      <template #operation="scope">
        <el-button type="primary" link>预览</el-button>
        <el-button @click="edit(scope.row.id)" type="primary" link>编辑</el-button>
        <el-button type="primary" link>删除</el-button>
        <el-button type="primary" link>同步</el-button>
        <el-button type="primary" link>生成代码</el-button>
      </template>
    </pro-table>

    <!-- 导入 -->
    <import-dialog @confirm="importDataConfirm" ref="importDialogRef" />
  </div>
</template>
