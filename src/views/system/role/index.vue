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
  </div>
</template>

<script lang="ts" name="role-manage" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getRoleList, deleteDictType, getDictDataType } from '@/api/modules/system';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const tableRef = ref();
const columns: ColumnProps[] = [
  { prop: 'roleId', label: '角色编号' },
  { prop: 'roleName', label: '角色名称', search: { el: 'input' } },
  { prop: 'roleKey', label: '权限字符', search: { el: 'input' } },
  { prop: 'roleSort', label: '显示顺序' },
  {
    prop: 'status',
    label: '状态',
    enum: () => getDictDataType('enable_disable'),
    search: { el: 'select' },
    fieldNames: { label: 'dictLabel', value: 'dictValue' }
  },
  { prop: 'createTime', label: '创建时间' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 120 }
];

const requestApi = (params: any) => {
  return new Promise(async resolve => {
    const response: any = await getRoleList(params);
    resolve({
      data: {
        list: response.rows,
        total: response.total,
        ...params
      }
    });
  });
};

const createTypeDialogRef = ref();
const create = (row: any = {}) => {
  createTypeDialogRef.value?.open(row);
};
const remove = (row: any) => {
  ElMessageBox.confirm(`是否删除“${row.roleName}”？`, '系统提示', { type: 'warning' })
    .then(async () => {
      const { msg } = await deleteDictType(row.roleId);
      tableRef.value.search();
      ElMessage.success(msg);
    })
    .catch(() => false);
};
</script>
