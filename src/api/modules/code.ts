import http from '@/api';
import qs from 'qs';

// 导入
export function importTable(params: any) {
  return http.post(`/code/gen/importTable?${qs.stringify(params)}`);
}

// 删除
export function deleteTable(id: string) {
  return http.delete(`/code/gen/${id}`);
}

// 列表
export function getGenList(params: any = {}) {
  return http.get('/code/gen/list', params);
}

// 数据库
export function getGenDbList(params: any = {}) {
  return http.get('/code/gen/db/list', params);
}
