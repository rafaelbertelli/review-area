export type User = {
  name: string;
  email: string;
  avatar_url: string;
};

export type SignInResponse = {
  token: string;
  user: User;
};

export type SignInRequestData = {
  email: string;
  password: string;
};
