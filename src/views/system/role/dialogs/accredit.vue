<template>
  <el-dialog v-model="visible" title="授权" width="1000">
    <div class="p-2.5">
      <pro-table :columns="columns" :request-api="requestApi" ref="tableRef" />
    </div>
  </el-dialog>
</template>

<script lang="ts" name="setting-dialog" setup>
import { ref } from 'vue';
import { unallocatedList, getDictDataType } from '@/api/modules/system';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const visible = ref(false);
const roleId = ref();
const tableRef = ref();

const columns: ColumnProps[] = [
  { prop: 'userId', label: '用户编号' },
  { prop: 'userName', label: '用户名称', search: { el: 'input' } },
  { prop: 'nickName', label: '用户昵称' },
  { prop: 'phonenumber', label: '手机号码', search: { el: 'input' } },
  {
    prop: 'status',
    label: '状态',
    enum: () => getDictDataType('enable_disable'),
    search: { el: 'select' },
    fieldNames: { label: 'dictLabel', value: 'dictValue' }
  },
  { prop: 'createTime', label: '创建时间', width: 180 }
];

const open = (id: string) => {
  visible.value = true;
  roleId.value = id;
  tableRef.value?.reset();
};
const requestApi = (params: any) => {
  params.roleId = roleId.value;
  return unallocatedList(params);
};

defineExpose({ open });
</script>
