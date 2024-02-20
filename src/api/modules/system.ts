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

// 获取菜单列表（树结构）
export function treeselect() {
  return http.get('/system/menu/treeselect');
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
  return http.get<any>(`/system/dict/type/${id}`);
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

// 获取字典数据内容
export function getDictDataType(type: string) {
  return http.get(`/system/dict/data/type/${type}`);
}

// 获取字典数据列表
export function getDictDataList(params: any = {}) {
  return http.get('/system/dict/data/list', params);
}

// 刷新缓存
export function refreshDictTypeCache() {
  return http.delete('/system/dict/type/refreshCache');
}

/**
 * 角色管理
 */

// 新增角色
export function createRole(params: any) {
  return http.post('/system/role', params);
}

// 删除角色
export function deleteRole(id: string) {
  return http.delete(`/system/role/${id}`);
}

// 编辑角色
export function editRole(params: any) {
  return http.put('/system/role', params);
}

// 获取角色列表
export function getRoleList(params: any = {}) {
  return http.get('/system/role/list', params);
}
