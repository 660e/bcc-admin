<template>
  <div class="card h-full flex flex-col px-5">
    <el-tabs v-model="active" class="flex-1 flex flex-col h-0">
      <info-pane :info="data.info" label="基本信息" name="info" />
      <rows-pane :rows="data.rows" label="字段信息" name="rows" />
    </el-tabs>
    <div class="flex justify-center pb-5">
      <el-button>取消</el-button>
      <el-button @click="confirm" type="primary">确定</el-button>
    </div>
  </div>
</template>

<script lang="ts" name="edit-page" setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTable } from '@/api/modules/code';
import { DataType } from '../models';

import InfoPane from './panes/info.vue';
import RowsPane from './panes/rows.vue';

const $route = useRoute();

const active = ref('rows');
const data = reactive<DataType>({
  info: {
    tableName: '',
    tableComment: '',
    tplCategory: 'crud',
    className: '',
    packageName: '',
    moduleName: '',
    businessName: '',
    functionName: '',

    treeCode: '',
    treeParentCode: '',
    treeName: '',

    subTableName: '',
    subTableFkName: '',

    remark: '',

    functionAuthor: 'admin',
    tplWebType: 'element-plus',
    genType: '0'
  },
  rows: []
});

const confirm = () => {
  console.log(data);
};

onMounted(async () => {
  const response: any = await getTable($route.params.tableId as string);
  data.info = response.data.info;
  data.rows = response.data.rows;
});
</script>
