import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { Context, createContext, useEffect, useState } from "react";

import { api } from "../../services/api";
import {
  recoverUserInformation,
  signInRequest,
} from "../../services/backend-auth/auth";
import route from "../../utils/routes";

import {
  AuthContextType,
  ChildrenProps,
  CommonHeaderProperties,
  SignInData,
  User,
} from "./types";

export const AuthContext: Context<AuthContextType> = createContext(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated: boolean = !!user;
  const COOKIE = process.env.NEXT_PUBLIC_COOKIE_NAME as string;

  useEffect(() => {
    const { [COOKIE]: token } = parseCookies();

    if (!token) {
      Router.push(route.LOGIN);
    }

    recoverUserInformation(token)
      .then((response) => {
        setUser(response.user);
      })
      .catch(() => {
        signOut();
      });
  }, []);

  async function signIn({ email, password }: SignInData) {
    // TODO: implement throw error

    const { token, user } = await signInRequest({ email, password }); // call my simulated backend

    const ONE_HOUR = 60 * 60 * 1;
    const COOKIE = process.env.NEXT_PUBLIC_COOKIE_NAME as string;

    setCookie(undefined, COOKIE, token, { maxAge: ONE_HOUR });

    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as CommonHeaderProperties;

    setUser(user);

    Router.push(route.DASHBOARD);
  }

  async function signOut() {
    setCookie(undefined, COOKIE, "", { maxAge: 0 });
    setUser(null);
    Router.push(route.LOGIN);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
