import http from '@/api';
import { Login } from '@/api/interface/index';

import authMenuList from '@/assets/json/authMenuList.json';
import authButtonList from '@/assets/json/authButtonList.json';

// 获取验证码
export function getCode() {
  return http.get('/code', {}, { loading: false });
}

// 登录
export function loginApi(params: Login.Form) {
  return http.post<Login.Response>('/auth/login', params);
  // return http.post<Login.Response>('/auth/login', {}, { params }); // post携带query -> ?username=admin&password=admin123
  // return http.post<Login.Response>('/auth/login', qs.stringify(params)); // post携带表单参数 -> application/x-www-form-urlencoded
  // return http.get<Login.Response>(`/auth/login?${qs.stringify(params, { arrayFormat: 'repeat' })}`); // get携带复杂参数
}

// 登出
export const logoutApi = () => {
  return http.delete('/auth/logout');
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  http.get('/system/menu/getRouters', {}, { loading: false });
  // return http.get<Menu.MenuOptions[]>('/menu/list', {}, { loading: false });
  return authMenuList;
};

//
//
//

// 获取按钮权限
export const getAuthButtonListApi = () => {
  console.log('获取按钮权限');
  // return http.get<Login.ResAuthButtons>('/auth/buttons', {}, { loading: false });
  return authButtonList;
};
