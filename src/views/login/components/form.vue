<script lang="ts" name="login-form" setup>
import { onMounted, reactive, ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import { FullScreen, Lock, User } from '@element-plus/icons-vue';
import { getCode } from '@/api/modules/login';

const formsRef = ref<FormInstance>();
const forms = reactive({
  username: '',
  password: '',
  code: ''
});
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请填写账号' }],
  password: [{ required: true, message: '请填写密码' }],
  code: [{ required: true, message: '请填写验证码' }]
});
const codeImage = ref('');
const refreshCode = () => {
  getCode().then((response: any) => {
    if (response.code === 200) codeImage.value = `data:image/gif;base64,${response.img}`;
  });
};
const login = () => {
  formsRef.value?.validate(valid => {
    if (valid) {
      console.log(forms);
    }
  });
};

onMounted(() => {
  refreshCode();
});
</script>

<template>
  <div class="p-5 space-y-5">
    <div class="text-xl text-center leading-none">BCC-Admin</div>
    <el-form :model="forms" :rules="rules" @keyup.enter="login" ref="formsRef">
      <el-form-item prop="username">
        <el-input v-model="forms.username" :prefix-icon="User" placeholder="账号" size="large" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="forms.password" :prefix-icon="Lock" placeholder="密码" size="large" />
      </el-form-item>
      <div class="flex space-x-5">
        <el-form-item prop="code" class="flex-1">
          <el-input v-model="forms.code" :prefix-icon="FullScreen" placeholder="验证码" size="large" />
        </el-form-item>
        <el-image :src="codeImage" @click="refreshCode" class="cursor-pointer h-10" />
      </div>
      <el-button @click="login" type="primary" class="w-full" size="large">登录</el-button>
    </el-form>
  </div>
</template>
