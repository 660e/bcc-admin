export namespace Login {
  export interface Form {
    username: string;
    password: string;
  }
  export interface Response {
    access_token: string;
  }

  //
  //
  //

  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 响应（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 响应
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

//
//
//

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 分页请求
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    id: string;
    username: string;
    gender: number;
    user: { detail: { age: number } };
    idCard: string;
    email: string;
    address: string;
    createTime: string;
    status: number;
    avatar: string;
    photo: any[];
    children?: ResUserList[];
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
