import http from '@/api';
import qs from 'qs';

// 导入
export function importTable(params: any) {
  return http.post(`/code/gen/importTable?${qs.stringify(params)}`);
}

// 删除
export function deleteTable(tableId: string) {
  return http.delete(`/code/gen/${tableId}`);
}

// 列表
export function getList(params: any = {}) {
  return http.get('/code/gen/list', params);
}

// 数据库
export function getDbList(params: any = {}) {
  return http.get('/code/gen/db/list', params);
}

// 预览
export function previewTable(tableId: string) {
  return http.get(`/code/gen/preview/${tableId}`);
}

// 同步
export function synchDb(tableName: string) {
  return http.get(`/code/gen/synchDb/${tableName}`);
}
