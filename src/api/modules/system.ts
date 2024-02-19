import http from '@/api';

/**
 * 菜单管理
 */

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

/**
 * 字典管理
 */

// 新增字典类型
export function createDictType(params: any) {
  return http.post('/system/dict/type', params);
}

// 删除字典类型
export function deleteDictType(id: string) {
  return http.delete(`/system/dict/type/${id}`);
}

// 编辑字典类型
export function editDictType(params: any) {
  return http.put('/system/dict/type', params);
}

// 获取字典类型
export function getDictType(id: string | string[]) {
  return http.get(`/system/dict/type/${id}`);
}

// 获取字典类型列表
export function getDictTypeList(params: any = {}) {
  return http.get('/system/dict/type/list', params);
}

// 新增字典数据
export function createDictData(params: any) {
  return http.post('/system/dict/data', params);
}

// 删除字典数据
export function deleteDictData(id: string) {
  return http.delete(`/system/dict/data/${id}`);
}

// 编辑字典数据
export function editDictData(params: any) {
  return http.put('/system/dict/data', params);
}

// 获取字典数据列表
export function getDictDataList(params: any = {}) {
  return http.get('/system/dict/data/list', params);
}
