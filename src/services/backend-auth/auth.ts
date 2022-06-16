import { AvatarGenerator } from "random-avatar-generator";
import { v4 as uuid } from "uuid";

import { SignInRequestData, SignInResponse } from "./types";

export async function signInRequest(
  data: SignInRequestData
): Promise<SignInResponse> {
  await delay();

  /**
   * By pass data to simulate backend validation
   */

  return {
    token: uuid(),
    user: {
      name: data.email,
      email: data.email,
      avatar_url: getAvatar(),
    },
  };
}

export async function recoverUserInformation(
  token: string
): Promise<SignInResponse> {
  await delay();

  /**
   * I should have received user token, and maybe its email, or some data
   * to find it in the database, but I am returning a fake user
   */

  return {
    token,
    user: {
      name: "Rafael",
      email: "rafaelbertelli89@gmail.com",
      avatar_url: getAvatar(),
    },
  };
}

const delay = (amount = 500) => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const getAvatar = (): string => {
  const avatarGenerator = new AvatarGenerator();
  return avatarGenerator.generateRandomAvatar();
};