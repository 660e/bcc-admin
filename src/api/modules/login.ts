import http from '@/api';
import { Login } from '@/api/interface/index';

import authMenuList from '@/assets/json/authMenuList.json';
import authButtonList from '@/assets/json/authButtonList.json';

// 获取验证码
export function getCode() {
  return http.get('/code', {}, { loading: false });
}

// 登录
export function login(params: Login.Form) {
  return http.post<Login.Response>('/auth/login', params);
  // return http.post<Login.Response>('/auth/login', {}, { params }); // post携带query -> ?username=admin&password=admin123
  // return http.post<Login.Response>('/auth/login', qs.stringify(params)); // post携带表单参数 -> application/x-www-form-urlencoded
  // return http.get<Login.Response>(`/auth/login?${qs.stringify(params, { arrayFormat: 'repeat' })}`); // get携带复杂参数
}

//
//
//

// 获取菜单列表
export const getAuthMenuListApi = () => {
  // return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { loading: false });
  // 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据
  return authMenuList;
};

// 获取按钮权限
export const getAuthButtonListApi = () => {
  // return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`, {}, { loading: false });
  // 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtonList.json 数据
  return authButtonList;
};

// 用户退出登录
export const logoutApi = () => {
  return http.post(`/logout`);
};
