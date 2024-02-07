<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :request-api="requestApi" :pagination="false" row-key="menuId" ref="tableRef">
      <template #tableHeader>
        <el-button @click="create()" type="primary">新增</el-button>
      </template>
      <template #operation="scope">
        <el-button @click="create(scope.row)" type="primary" link>编辑</el-button>
        <el-button @click="remove(scope.row)" type="primary" link>删除</el-button>
      </template>
    </pro-table>

    <!-- 新增/编辑 -->
    <create-dialog @confirm="tableRef.search()" ref="createDialogRef" />
  </div>
</template>

<script lang="ts" name="menu-manage" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getMenuList, deleteMenu } from '@/api/modules/system';
import { buildTree } from '@/utils';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';
import CreateDialog from './dialogs/create.vue';

const tableRef = ref();
const columns: ColumnProps[] = [
  { prop: 'menuName', label: '菜单名称', width: 200, search: { el: 'input' } },
  { prop: 'icon', label: '图标', width: 120 },
  { prop: 'orderNum', label: '排序', width: 60 },
  { prop: 'perms', label: '权限标识', width: 200 },
  { prop: 'path', label: '路由地址' },
  { prop: 'component', label: '组件路径' },
  { prop: 'status', label: '状态', width: 60, search: { el: 'select' } },
  { prop: 'createTime', label: '创建时间', width: 200 },
  { prop: 'operation', label: '操作', fixed: 'right', width: 120 }
];

const requestApi = (params: any) => {
  return new Promise(async resolve => {
    const response: any = await getMenuList(params);
    const data = buildTree(response.data, 'menuId', 'parentId');
    resolve({ data });
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
