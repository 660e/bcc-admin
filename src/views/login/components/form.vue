<script lang="ts" name="login-form" setup>
import { reactive } from 'vue';
import { getCaptcha } from '@/api/modules/login';

const forms = reactive({
  username: '',
  password: '',
  captcha: ''
});

getCaptcha().then(response => {
  console.log(forms);
  console.log(response);
});
</script>

<template>
  <div>
    <div>BCC-Admin</div>
  </div>
</template>
