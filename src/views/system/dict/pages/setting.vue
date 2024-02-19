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
    <create-data-dialog @confirm="tableRef.search()" ref="createDataDialogRef" />
  </div>
</template>

<script lang="ts" name="setting-dialog" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getDictDataList, deleteDictData, getDictType, getDictDataType } from '@/api/modules/system';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';
import CreateDataDialog from '../dialogs/create-data.vue';

const tableRef = ref();
const columns: ColumnProps[] = [
  { prop: 'dictCode', label: '字典编码' },
  { prop: 'dictLabel', label: '字典标签', search: { el: 'input' } },
  { prop: 'dictValue', label: '字典键值' },
  { prop: 'dictSort', label: '字典排序' },
  {
    prop: 'status',
    label: '状态',
    enum: () => getDictDataType('enable_disable'),
    search: { el: 'select' },
    fieldNames: { label: 'dictLabel', value: 'dictValue' }
  },
  { prop: 'remark', label: '备注' },
  { prop: 'createTime', label: '创建时间' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 120 }
];

const $route = useRoute();
const dictType = ref();
const requestApi = async (params: any) => {
  return new Promise(async resolve => {
    const dictTypeResponse: any = await getDictType($route.params.id);
    dictType.value = dictTypeResponse.data.dictType;
    params.dictType = dictType.value;
    const dictDataListResponse: any = await getDictDataList(params);
    resolve({
      data: {
        list: dictDataListResponse.rows,
        total: dictDataListResponse.total,
        ...params
      }
    });
  });
};

const createDataDialogRef = ref();
const create = (row: any = {}) => {
  createDataDialogRef.value?.open(row, dictType.value);
};
const remove = (row: any) => {
  ElMessageBox.confirm(`是否删除“${row.dictLabel}”？`, '系统提示', { type: 'warning' })
    .then(async () => {
      const { msg } = await deleteDictData(row.dictCode);
      tableRef.value.search();
      ElMessage.success(msg);
    })
    .catch(() => false);
};
</script>
