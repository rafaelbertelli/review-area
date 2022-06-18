import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { Context, createContext, useEffect, useState } from "react";
import { api } from "../../@seedwork/apiClient/api";

import appRoute from "../../@seedwork/routes/appRoutes";
import {
  recoverUserInformation,
  signInRequest,
} from "../../services/backend-auth/auth";

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
      Router.push(appRoute.LOGIN);
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

    Router.push(appRoute.DASHBOARD);
  }

  async function signOut() {
    setCookie(undefined, COOKIE, "", { maxAge: 0 });
    setUser(null);
    Router.push(appRoute.LOGIN);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
