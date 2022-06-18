import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CategoryProps } from "../../../@seedwork/domain/Category/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return axios
    .get("https://api.mercadolibre.com/sites/MLB/categories")
    .then((response) => {
      const categories: CategoryProps[] = response.data;
      res.status(200).json({ categories });
    });
}
