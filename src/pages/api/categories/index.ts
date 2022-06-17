import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return axios
    .get("https://api.mercadolibre.com/sites/MLB/categories")
    .then((response) => {
      res.status(200).json({ data: response.data });
    });
}
