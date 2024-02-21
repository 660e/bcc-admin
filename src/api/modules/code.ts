import http from '@/api';

export function getGenList() {
  return http.get('/code/gen/list');
}
