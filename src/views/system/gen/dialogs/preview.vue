<script lang="ts" name="preview-dialog" setup>
import { ref } from 'vue';

const visible = ref(false);
const open = () => {
  visible.value = true;
};
const closed = () => {
  console.log('closed');
};

const active = ref('index.vue');

defineExpose({ open });
</script>

<template>
  <el-dialog v-model="visible" @closed="closed" title="代码预览" fullscreen>
    <el-tabs v-model="active" tab-position="left" class="tabs">
      <el-tab-pane label="index.vue" name="index.vue">
        <div style="height: 3000px">Lorem ipsum dolor sit amet.</div>
      </el-tab-pane>
      <el-tab-pane label="index.ts" name="index.ts">
        <div style="height: 2000px">Lorem ipsum dolor sit amet.</div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<style lang="scss" scoped>
$height: calc(100vh - 41px);
.tabs {
  height: $height;
  :deep(.el-tabs__content) {
    height: $height;
    overflow-y: auto;
  }
}
</style>
