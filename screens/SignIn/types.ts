export interface UserData {
  created: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
  updated: number;
}

export interface SignInResponse {
  data: {
    token: string;
    user: UserData;
  };
  datetime: number;
  info: string;
  latency: number;
  request: string;
  status: number;
};
