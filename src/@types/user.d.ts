declare namespace UserLogin {
  interface params {
    account: string;
    password: string;
    isLoading: boolean;
  }

  interface data {
    id: string;
    account: string;
    mobile: string;
    token: string;
    avatar: string;
    nickname: string;
    gender: string;
    birthday: string;
    cityCode: string;
    provinceCode: string;
    profession: string;
  }
}
