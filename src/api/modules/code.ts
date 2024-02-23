import http from '@/api';
import qs from 'qs';

// 列表
export function getGenList(params: any = {}) {
  return http.get('/code/gen/list', params);
}

// 数据库
export function getGenDbList(params: any = {}) {
  return http.get('/code/gen/db/list', params);
}

// 导入
export function importTable(params: any) {
  return http.post(`/code/gen/importTable?${qs.stringify(params)}`);
}
