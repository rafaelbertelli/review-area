import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let { category = "MLB5672" } = req.query;

  const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_URL_I18N}`;
  const url = `${BASE_URL}/search?category=${category}`;

  return axios.get(url).then((response) => {
    const products = response.data;
    res.status(200).json({ products });
  });
}
