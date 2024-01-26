<script lang="ts" name="preview-dialog" setup>
import { ref } from 'vue';

const visible = ref(false);
const open = () => {
  visible.value = true;
};
const closed = () => {
  console.log('closed');
};

defineExpose({ open });
</script>

<template>
  <el-dialog v-model="visible" @closed="closed" title="代码预览" fullscreen>
    <div>Lorem ipsum dolor sit amet.</div>
  </el-dialog>
</template>
