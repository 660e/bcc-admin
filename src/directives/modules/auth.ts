import { useAuthStore } from '@/stores/modules/auth';
import type { Directive, DirectiveBinding } from 'vue';

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const $authStore = useAuthStore();

    console.log($authStore.authButtonListGet);
    console.log(el);
    console.log(binding);

    // const { value } = binding;

    // const currentPageRoles = $authStore.authButtonListGet[$authStore.routeName] ?? [];
    // if (value instanceof Array && value.length) {
    //   const hasPermission = value.every(item => currentPageRoles.includes(item));
    //   if (!hasPermission) el.remove();
    // } else {
    //   if (!currentPageRoles.includes(value)) el.remove();
    // }
  }
};

export default auth;
