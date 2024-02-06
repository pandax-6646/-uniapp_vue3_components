declare namespace UserLogin {
  interface params {
    username: string;
    password: string;
    code: number;
    codeKey: string;
    type: number;
  }
  interface data {
    code: string;
    data: string;
    datas: {
      userName: string;
      userNumber: string;
      userToken: string;
    };
    msg: string;
  }
}
