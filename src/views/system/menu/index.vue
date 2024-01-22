<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :data="data" row-key="path">
      <template #tableHeader>
        <el-button type="primary">新增</el-button>
      </template>
      <template #icon="scope">
        <el-icon :size="16">
          <component :is="scope.row.meta.icon" />
        </el-icon>
      </template>
      <template #operation>
        <el-button type="primary" link>编辑</el-button>
        <el-button type="primary" link>删除</el-button>
      </template>
    </pro-table>
  </div>
</template>

<script lang="ts" name="menu-manage" setup>
import { ref } from 'vue';
import { ColumnProps } from '@/components/pro-table/interface';

import authMenuList from '@/assets/json/authMenuList.json';
import ProTable from '@/components/pro-table/index.vue';

const data = ref(authMenuList.data);

const columns: ColumnProps[] = [
  { prop: 'meta.title', label: '菜单名称', search: { el: 'input' } },
  { prop: 'meta.icon', label: '菜单图标' },
  { prop: 'name', label: '路由名称', search: { el: 'input' } },
  { prop: 'path', label: '菜单路径', search: { el: 'input' } },
  { prop: 'component', label: '组件路径' },
  { prop: 'operation', label: '操作', fixed: 'right' }
];
</script>
