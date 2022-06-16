import { HeadersDefaults } from "axios";
import { ReactNode } from "react";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export type User = {
  name: string;
  email: string;
  avatar_url: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
};

export type ChildrenProps = {
  children: ReactNode;
};
