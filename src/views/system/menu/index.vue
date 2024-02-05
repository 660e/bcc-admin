<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :request-api="requestApi" :pagination="false" row-key="menuId">
      <template #tableHeader>
        <el-button type="primary">新增</el-button>
      </template>
      <!-- <template #icon="scope">
        <el-icon :size="16">
          <component :is="scope.row.meta.icon" />
        </el-icon>
      </template> -->
      <template #operation>
        <el-button type="primary" link>编辑</el-button>
        <el-button type="primary" link>新增</el-button>
        <el-button type="primary" link>删除</el-button>
      </template>
    </pro-table>
  </div>
</template>

<script lang="ts" name="menu-manage" setup>
// import { ref } from 'vue';
import { getMenuList } from '@/api/modules/system';
import { buildTree } from '@/utils';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const columns: ColumnProps[] = [
  { prop: 'menuName', label: '菜单名称', search: { el: 'input' } },
  { prop: 'icon', label: '图标' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 170 }
];

const requestApi = (params: any) => {
  return new Promise(async resolve => {
    const response: any = await getMenuList(params);
    const data = buildTree(response.data, 'menuId', 'parentId');
    resolve({ data });
  });
};
</script>
