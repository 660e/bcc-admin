<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :request-api="requestApi" row-key="menuId" ref="tableRef">
      <template #tableHeader>
        <el-button @click="create()" type="primary">新增</el-button>
      </template>
      <template #operation="scope">
        <el-button @click="create(scope.row)" type="primary" link>编辑</el-button>
        <el-button @click="remove(scope.row)" type="primary" link>删除</el-button>
      </template>
    </pro-table>

    <!-- 新增/编辑 -->
    <!-- <create-dialog @confirm="tableRef.search()" ref="createDialogRef" /> -->
  </div>
</template>

<script lang="ts" name="dict-manage" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getDictList, deleteMenu } from '@/api/modules/system';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';
// import CreateDialog from './dialogs/create.vue';

const tableRef = ref();
const columns: ColumnProps[] = [
  { prop: 'dictId', label: '字典编号' },
  { prop: 'dictName', label: '字典名称', search: { el: 'input' } },
  { prop: 'dictType', label: '字典类型', search: { el: 'input' } },
  { prop: 'status', label: '状态', search: { el: 'select' } },
  { prop: 'remark', label: '备注' },
  { prop: 'createTime', label: '创建时间' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 120 }
];

const requestApi = (params: any) => {
  return new Promise(async resolve => {
    const response: any = await getDictList(params);
    resolve({
      data: {
        list: response.rows,
        total: response.total,
        ...params
      }
    });
  });
};

const createDialogRef = ref();
const create = (row: any = {}) => {
  createDialogRef.value?.open(row);
};
const remove = (row: any) => {
  ElMessageBox.confirm(`是否删除“${row.menuName}”？`, '系统提示', { type: 'warning' })
    .then(async () => {
      const { msg } = await deleteMenu(row.menuId);
      tableRef.value.search();
      ElMessage.success(msg);
    })
    .catch(() => false);
};
</script>
