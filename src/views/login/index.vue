<template>
  <div class="h-full flex justify-center items-center relative bg">
    <el-card class="w-80">
      <div class="text-3xl text-center pb-5">BCC-Admin</div>
      <login-form />
    </el-card>
    <switch-dark class="absolute right-5 bottom-5" />
  </div>
</template>

<script lang="ts" name="login" setup>
import LoginForm from './components/login-form.vue';
import SwitchDark from '@/components/switch-dark/index.vue';
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('@/assets/images/login_bg.svg');
  background-size: cover;
}
</style>
