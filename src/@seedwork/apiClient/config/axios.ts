import axios, { AxiosInstance, HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export function getAPIClient(ctx?: any): AxiosInstance {
  const COOKIE = process.env.NEXT_PUBLIC_COOKIE_NAME as string;
  const { [COOKIE]: token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  if (token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as CommonHeaderProperties;
  }

  return api;
}
