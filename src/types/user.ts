export interface ISignin {
  email: string;
  password: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  mobile: string;
  avatar: string;
  role: string;
  verifyEmail: string;
  accessToken: string;
  expireAccessToken: string;
  active: boolean;
}
