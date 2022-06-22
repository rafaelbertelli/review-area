import { AvatarGenerator } from "random-avatar-generator";
import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

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
      name: faker.name.findName(),
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
      name: faker.name.findName(),
      email: faker.internet.email(),
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
