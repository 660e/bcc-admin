<script lang="ts" name="login-form" setup>
import { onMounted, reactive, ref } from 'vue';
import { FullScreen, Lock, User } from '@element-plus/icons-vue';
import { getCaptcha } from '@/api/modules/login';

const forms = reactive({
  username: '',
  password: '',
  captcha: ''
});

const captchaImage = ref('');
const refreshCaptcha = () => {
  getCaptcha().then((response: any) => {
    captchaImage.value = `data:image/gif;base64,${response.img}`;
  });
};
const login = () => {
  console.log(forms);
};

onMounted(() => {
  refreshCaptcha();
});
</script>

<template>
  <div class="p-5 space-y-5">
    <div class="text-xl text-center leading-none">BCC-Admin</div>
    <el-input v-model="forms.username" :prefix-icon="User" placeholder="账号" size="large" />
    <el-input v-model="forms.password" :prefix-icon="Lock" placeholder="密码" size="large" />
    <div class="flex space-x-5">
      <el-input v-model="forms.captcha" :prefix-icon="FullScreen" placeholder="验证码" size="large" />
      <el-image :src="captchaImage" @click="refreshCaptcha" class="cursor-pointer" />
    </div>
    <el-button @click="login" type="primary" class="w-full" size="large">登录</el-button>
  </div>
</template>
