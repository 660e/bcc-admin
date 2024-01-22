<template>
  <div class="flex flex-col h-full">
    <pro-table :columns="columns" :data="data" row-key="path">
      <template #tableHeader>
        <el-button>生成</el-button>
        <el-button>导入</el-button>
        <el-button>修改</el-button>
        <el-button>删除</el-button>
      </template>
      <template #operation>
        <el-button type="primary" link>预览</el-button>
        <el-button type="primary" link>编辑</el-button>
        <el-button type="primary" link>删除</el-button>
        <el-button type="primary" link>同步</el-button>
        <el-button type="primary" link>生成代码</el-button>
      </template>
    </pro-table>
  </div>
</template>

<script lang="ts" name="gen-manage" setup>
import { ref } from 'vue';
import { ColumnProps } from '@/components/pro-table/interface';

import ProTable from '@/components/pro-table/index.vue';

const data = ref([]);

const columns: ColumnProps[] = [
  { prop: 'name', label: '表名称', search: { el: 'input' } },
  { prop: 'description', label: '表描述', search: { el: 'input' } },
  { prop: 'substance', label: '实体' },
  { prop: 'creationTime', label: '创建时间' },
  { prop: 'updateTime', label: '更新时间' },
  { prop: 'operation', label: '操作', width: 250, fixed: 'right' }
];
</script>
