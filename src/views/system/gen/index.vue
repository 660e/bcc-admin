<script lang="ts" name="gen-manage" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ColumnProps } from '@/components/pro-table/interface';
import { ElMessage, ElMessageBox } from 'element-plus';

import ProTable from '@/components/pro-table/index.vue';
import ImportDialog from './dialogs/import.vue';
import PreviewDialog from './dialogs/preview.vue';

const data = ref(new Array(20).fill(null).map((e, i) => ({ id: i, tableName: `TEST-G-${i}` })));
const columns: ColumnProps[] = [
  { type: 'selection', fixed: 'left', width: 0 },
  { prop: 'tableName', label: '表名称', search: { el: 'input' } },
  { prop: 'tableComment', label: '表描述', search: { el: 'input' } },
  { prop: 'className', label: '实体' },
  { prop: 'createTime', label: '创建时间' },
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
const previewDialogRef = ref();
const preview = () => {
  previewDialogRef.value.open();
};
const edit = (id: string) => {
  $router.push({ name: 'gen-edit', params: { id } });
};
const remove = (row: any) => {
  ElMessageBox.confirm(`是否确认删除表名称为“${row.tableName}”的数据项？`, '系统提示', { type: 'warning' })
    .then(() => {
      ElMessage.success('删除成功');
    })
    .catch(() => false);
};
const sync = (row: any) => {
  ElMessageBox.confirm(`确认要强制同步“${row.tableName}”表结构吗？`, '系统提示', { type: 'warning' })
    .then(() => {
      ElMessage.success('同步成功');
    })
    .catch(() => false);
};
</script>

<template>
  <div class="flex flex-col h-full">
    <pro-table :data="data" :columns="columns">
      <template #tableHeader="scope">
        <el-button @click="importData">导入</el-button>
        <el-button @click="batchDelete(scope.selectedListIds)">删除</el-button>
      </template>
      <template #operation="scope">
        <el-button @click="preview" type="primary" link>预览</el-button>
        <el-button @click="edit(scope.row.id)" type="primary" link>编辑</el-button>
        <el-button @click="remove(scope.row)" type="primary" link>删除</el-button>
        <el-button @click="sync(scope.row)" type="primary" link>同步</el-button>
        <el-button type="primary" link>生成代码</el-button>
      </template>
    </pro-table>

    <!-- 导入 -->
    <import-dialog @confirm="importDataConfirm" ref="importDialogRef" />
    <!-- 预览 -->
    <preview-dialog ref="previewDialogRef" />
  </div>
</template>
