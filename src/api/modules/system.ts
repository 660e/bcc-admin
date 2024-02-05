import http from '@/api';

// 获取菜单列表
export function getMenuList(params: any) {
  return http.get('/system/menu/list', params);
}

// 删除菜单
export function deleteMenu(id: string) {
  return http.delete(`/system/menu/${id}`);
}
