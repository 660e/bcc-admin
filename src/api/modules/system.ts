import http from '@/api';

// 获取菜单列表
export function getMenuList(params: any = {}) {
  return http.get('/system/menu/list', params);
}

// 新增菜单
export function createMenu(params: any) {
  return http.post('/system/menu', params);
}

// 删除菜单
export function deleteMenu(id: string) {
  return http.delete(`/system/menu/${id}`);
}

// 编辑菜单
export function editMenu(params: any) {
  return http.put('/system/menu', params);
}

// 获取字典列表
export function getDictList(params: any = {}) {
  return http.get('/system/dict/type/list', params);
}
