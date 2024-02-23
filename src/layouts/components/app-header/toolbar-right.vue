<template>
  <div class="tool-bar-ri">
    <div class="header-icon">
      <message-box />
      <assembly-size />
      <language-setting />
      <search-menu />
      <theme-setting />
      <full-screen />
    </div>
    <span class="username">{{ username }}</span>
    <the-avatar />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/modules/user';

import MessageBox from './components/message-box.vue';
import AssemblySize from './components/assembly-size.vue';
import LanguageSetting from './components/language-setting.vue';
import SearchMenu from './components/search-menu.vue';
import ThemeSetting from './components/theme-setting.vue';
import FullScreen from './components/full-screen.vue';
import TheAvatar from './components/the-avatar.vue';

const userStore = useUserStore();
const username = computed(() => userStore.userInfo.name);
</script>

<style lang="scss" scoped>
.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
      color: var(--el-header-text-color);
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
