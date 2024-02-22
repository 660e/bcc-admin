import http from '@/api';
import { Login } from '@/api/interface/index';
import { HOME_URL } from '@/config';

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
export const getAuthMenuListApi = async () => {
  const { data } = await http.get('/system/menu/getRouters', {}, { loading: false });
  return { data: transformTree(data) };
};

// 获取按钮权限
export const getAuthButtonListApi = async () => {
  const response: any = await http.get('/system/user/getInfo', {}, { loading: false });
  console.log(response.permissions);
  // return http.get<Login.ResAuthButtons>('/auth/buttons', {}, { loading: false });
  return authButtonList;
};

/**
 * 格式化路由
 */
function transformTree(tree: any): Menu.MenuOptions[] {
  return tree.map((e: any) => {
    const item: Menu.MenuOptions = {
      path: e.path,
      name: e.name,
      component: e.component,
      meta: {
        icon: e.meta?.icon || '',
        isAffix: e.path === HOME_URL || e.meta?.affix,
        isFull: e.meta?.full,
        isHide: e.hidden,
        isKeepAlive: !e.meta?.noCache,
        isLink: e.meta?.link || '',
        title: e.meta?.title || ''
      }
    };
    if (e.children?.length) item.children = transformTree(e.children);
    return item;
  });
}
