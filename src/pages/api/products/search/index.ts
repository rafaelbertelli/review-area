import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { term } = req.query;

  return axios
    .get(`https://api.mercadolibre.com/sites/MLB/search?q=${term}`)
    .then((response) => {
      const items = response.data;
      console.log(items);
      console.log("search");
      console.log(">>>", term);

      res.status(200).json({ items });
    });
}
