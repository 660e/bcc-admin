<template>
  <div class="card h-full p-5 space-y-5">
    <span class="text">按钮权限</span>
    <el-alert :title="`当前用户按钮权限：${Object.keys(BUTTONS).join(', ')}`" type="success" />
    <el-divider content-position="left">使用 v-auth 指令绑定权限</el-divider>
    <div>
      <!-- <el-button v-auth="['']" type="primary">新增</el-button> -->
      <!-- <el-button v-auth="['']" type="primary">删除</el-button> -->
      <!-- <el-button v-auth="['']" type="primary">编辑</el-button> -->
      <!-- <el-button v-auth="['']" type="primary">搜索</el-button> -->
    </div>
    <el-divider content-position="left">使用 hooks 方式绑定权限</el-divider>
    <div>
      <el-button v-if="BUTTONS['examples:auth:create']" type="success">新增</el-button>
      <el-button v-if="BUTTONS['examples:auth:remove']" type="danger">删除</el-button>
      <el-button v-if="BUTTONS['examples:auth:edit']" type="warning">编辑</el-button>
      <el-button v-if="BUTTONS['examples:auth:search']" type="primary">搜索</el-button>
    </div>

    <!-- <div v-auth="['system:menu:add']"></div> -->
    <!-- <el-alert :title="`：${JSON.stringify(Object.keys(BUTTONS))}`"  :closable="false" /> -->
    <!-- <el-divider content-position="left"> 使用 Hooks 方式绑定权限 </el-divider>
    <el-row>
      <el-button v-if="BUTTONS.add" type="primary" :icon="CirclePlus"> 新增 </el-button>
      <el-button v-if="BUTTONS.edit" type="warning" :icon="EditPen"> 编辑 </el-button>
      <el-button v-if="BUTTONS.delete" type="danger" plain :icon="Delete"> 删除 </el-button>
      <el-button v-if="BUTTONS.import" type="info" plain :icon="Upload"> 导入数据 </el-button>
      <el-button v-if="BUTTONS.export" type="info" plain :icon="Download"> 导出数据 </el-button>
    </el-row>
    <el-divider content-position="left">  </el-divider>
    <el-row>
      <el-button v-auth="'add'"  :icon="CirclePlus">  </el-button>
      <el-button v-auth="'edit'" type="warning" :icon="EditPen"> 编辑 </el-button>
      <el-button v-auth="'delete'" type="danger" plain :icon="Delete"> 删除 </el-button>
      <el-button v-auth="'import'" type="info" plain :icon="Upload"> 导入数据 </el-button>
      <el-button v-auth="'export'" type="info" plain :icon="Download"> 导出数据 </el-button>
    </el-row>
    <el-divider content-position="left"> 使用 v-auth 指令绑定多个权限 </el-divider>
    <el-row>
      <el-button v-auth="['add', 'edit', 'delete']" type="primary" :icon="CirclePlus"> 新增 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import']" type="warning" :icon="EditPen"> 编辑 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" type="danger" plain :icon="Delete"> 删除 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" type="info" plain :icon="Upload"> 导入数据 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" type="info" plain :icon="Download"> 导出数据 </el-button>
    </el-row> -->

    <!-- 新增 examples:auth:create -->
    <!-- 删除 examples:auth:remove -->
    <!-- 编辑 examples:auth:edit -->
    <!-- 搜索 examples:auth:search -->
  </div>
</template>

<script lang="ts" name="auth-direct" setup>
import { useAuthButtons } from '@/hooks/useAuthButtons';

const { BUTTONS } = useAuthButtons();
</script>
