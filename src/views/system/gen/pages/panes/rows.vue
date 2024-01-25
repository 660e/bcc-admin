<script lang="ts" name="rows-pane" setup>
import { ColumnProps } from '@/components/pro-table/interface';
import { InfoType } from '../../models';

import ProTable from '@/components/pro-table/index.vue';

const $props = defineProps<{ rows: InfoType[] }>();

const data = $props.rows;
const columns: ColumnProps[] = [
  { prop: 'name', label: '字段列名' },
  { prop: 'description', label: '字段描述' },
  { prop: 'type', label: '物理类型' },
  { prop: 'javaType', label: 'java类型' },
  { prop: 'javaAttribute', label: 'java属性' },
  { prop: 'insert', label: '插入', width: 70 },
  { prop: 'edit', label: '编辑', width: 70 },
  { prop: 'list', label: '列表', width: 70 },
  { prop: 'search', label: '查询', width: 70 },
  { prop: 'searchMode', label: '查询方式' },
  { prop: 'required', label: '必填', width: 70 },
  { prop: 'displayType', label: '显示类型' },
  { prop: 'dictType', label: '字典类型' }
];
</script>

<template>
  <el-tab-pane v-bind="$attrs" class="h-full no-card">
    <pro-table :data="data" :columns="columns" :pagination="false">
      <template #description="scope">
        <el-input v-model="scope.row.description" />
      </template>
      <template #javaType="scope">
        <el-select v-model="scope.row.javaType"></el-select>
      </template>
      <template #javaAttribute="scope">
        <el-input v-model="scope.row.javaAttribute" />
      </template>
      <template #insert="scope">
        <el-checkbox v-model="scope.row.insert" />
      </template>
      <template #edit="scope">
        <el-checkbox v-model="scope.row.edit" />
      </template>
      <template #list="scope">
        <el-checkbox v-model="scope.row.list" />
      </template>
      <template #search="scope">
        <el-checkbox v-model="scope.row.search" />
      </template>
      <template #searchMode="scope">
        <el-select v-model="scope.row.searchMode"></el-select>
      </template>
      <template #required="scope">
        <el-checkbox v-model="scope.row.required" />
      </template>
      <template #displayType="scope">
        <el-select v-model="scope.row.displayType"></el-select>
      </template>
      <template #dictType="scope">
        <el-select v-model="scope.row.dictType"></el-select>
      </template>
    </pro-table>
  </el-tab-pane>
</template>

<style lang="scss" scoped>
.no-card :deep(.table-main) {
  padding: 20px 0;
}
</style>
