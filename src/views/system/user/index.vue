<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :request-api="getRoleList" ref="tableRef">
      <template #tableHeader>
        <el-button @click="create()" type="primary">新增</el-button>
      </template>
      <template #operation="scope">
        <template v-if="scope.row.roleId !== 1">
          <el-button @click="create(scope.row)" type="primary" link>编辑</el-button>
          <el-button @click="remove(scope.row)" type="primary" link>删除</el-button>
        </template>
      </template>
    </pro-table>

    <!-- 新增/编辑 -->
    <create-dialog @confirm="tableRef.search()" ref="createDialogRef" />
  </div>
</template>

<script lang="ts" name="user-manage" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getRoleList, deleteRole, getDictDataType } from '@/api/modules/system';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';
import CreateDialog from './dialogs/create.vue';

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

const createDialogRef = ref();
const create = (row: any = {}) => {
  createDialogRef.value?.open(row);
};
const remove = (row: any) => {
  ElMessageBox.confirm(`是否删除“${row.roleName}”？`, '系统提示', { type: 'warning' })
    .then(async () => {
      const { msg } = await deleteRole(row.roleId);
      tableRef.value.search();
      ElMessage.success(msg);
    })
    .catch(() => false);
};
</script>
