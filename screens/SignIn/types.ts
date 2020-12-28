export interface FormProps {
  handleInput: (input: string, value: string) => void,
  handleSubmit: () => Promise<void>,
  email: string;
  error: string;
  loading: boolean;
  password: string;
};

export interface UserData {
  created: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
  updated: number;
};

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
