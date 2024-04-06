// 响应数据类型定义
declare namespace Http {
  type Response<T> = Promise<{
    code: string;
    msg: string;
    result?: T;
  }>;

  // 通用分页结果类型
  type PageResult<T> = {
    items: T[];
    counts: number;
    page: number;
    pages: number;
    pageSize: number;
  };
}

// 路由参数类型定义
declare namespace Types {
  type Query = {
    replace?: boolean;
    [propName: string]: any;
  };
}

// 主题信息
type NavBar = {
  backgroundColor: string;
  frontColor: string;
};

type TabBar = {
  backgroundColor: string;
  color: string;
  selectedColor: string;
  borderStyle: string;
};

type Main = {
  "--primary-color": string;
  "--success-color": string;
  "--warning-color": string;
  "--error-color": string;
};

declare interface Theme {
  navBar: NavBar;
  tabBar: TabBar;
  main: Main;
}
