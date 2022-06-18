import { getAPIClient } from "../axios";
import * as libNookies from "nookies";

describe("test apiClient configuration", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_COOKIE_NAME;
  });

  it("should have a default config with baseURL", () => {
    const apiClient = getAPIClient();
    expect(apiClient.defaults.baseURL).toBe("http://localhost:3000/api");
  });

  it("should have authorization token when token is defined", () => {
    process.env.NEXT_PUBLIC_COOKIE_NAME = "cookie.test";

    const spyParseCookies = jest.spyOn(libNookies, "parseCookies");
    spyParseCookies.mockImplementation(() => ({ "cookie.test": "test" }));

    const apiClient = getAPIClient();
    expect(apiClient.defaults.headers.Authorization).toBe("Bearer test");
  });

  it("should not have authorization token when token is not defined", () => {
    const apiClient = getAPIClient();
    expect(apiClient.defaults.headers.Authorization).toBeUndefined();
  });
});
