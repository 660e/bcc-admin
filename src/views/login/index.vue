<template>
  <div class="h-full flex justify-center items-center relative">
    <div class="flex rounded overflow-hidden">
      <el-image :src="loginImage" fit="cover" class="w-80" />
      <login-form class="w-80" />
    </div>
    <switch-dark class="absolute right-5 bottom-5" />
  </div>
</template>

<script lang="ts" name="login" setup>
import loginImage from '@/assets/images/login.jpg';
import SwitchDark from '@/components/switch-dark/index.vue';
import LoginForm from './components/form.vue';
</script>
