import http from '@/api';

export function getMenuList(params: any) {
  return http.get('/system/menu/list', params);
}
