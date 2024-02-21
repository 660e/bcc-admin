import http from '@/api';

// 列表
export function getGenList(params: any = {}) {
  return http.get('/code/gen/list', params);
}

// 数据库
export function getGenDbList(params: any = {}) {
  return http.get('/code/gen/db/list', params);
}
