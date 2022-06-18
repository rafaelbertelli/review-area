import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return axios
    .get("https://api.mercadolibre.com/sites/MLB/search?category=MLB5672")
    .then((response) => {
      const products = response.data;
      res.status(200).json({ products });
    });
}
