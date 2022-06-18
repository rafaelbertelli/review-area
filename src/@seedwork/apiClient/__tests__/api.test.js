import { api } from '../api'
import { getAPIClient } from '../config/axios';

describe("api", () => {
  it("should be defined", () => {
    expect(api).toBeDefined();
  })
})