import http from '@/api';

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

// 获取菜单列表
export function getMenuList(params: any = {}) {
  return http.get('/system/menu/list', params);
}

// 新增字典
export function createDictType(params: any) {
  return http.post('/system/dict/type', params);
}

// 删除字典
export function deleteDictType(id: string) {
  return http.delete(`/system/dict/type/${id}`);
}

// 编辑字典
export function editDictType(params: any) {
  return http.put('/system/dict/type', params);
}

// 获取字典列表
export function getDictTypeList(params: any = {}) {
  return http.get('/system/dict/type/list', params);
}
