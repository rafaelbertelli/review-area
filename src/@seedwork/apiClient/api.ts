import { AxiosInstance } from "axios";
import { getAPIClient } from "./config/axios";

export const api: AxiosInstance = getAPIClient();
