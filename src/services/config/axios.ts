import axios, { AxiosInstance, HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export function getAPIClient(ctx?: any): AxiosInstance {
  const COOKIE_NAME = "reviewarea.token";
  const { [COOKIE_NAME]: token } = parseCookies(ctx);

  /**
   * call ML API domain
   */
  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  if (token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as CommonHeaderProperties;
  }

  return api;
}
