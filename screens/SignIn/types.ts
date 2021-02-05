export interface FormProps {
  email: string;
  error: string;
  handleInput: (input: string, value: string) => void;
  handleRecovery: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  handleSubmit: () => Promise<void>;
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
