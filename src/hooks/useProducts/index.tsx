import { useState } from "react";

import { api } from "../../@seedwork/apiClient/api";
import safeURI from "../../@seedwork/apiClient/safe-uri";
import { ProductUiProps } from "../../@seedwork/domain/Product/type";
import apiRoute from "../../@seedwork/routes/apiRoutes";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async (): Promise<void> => {
    const result = await api.get(apiRoute.PRODUCTS);
    setProducts(result.data.products.results.map(productUiMapper));
    return Promise.resolve();
  };

  const searchProducts = async (term: string): Promise<void> => {
    const urlPath = `${apiRoute.PRODUCTS_SEARCH}?term=${safeURI(term)}`;
    const result = await api.get(urlPath);
    setProducts(result.data.products.results.map(productUiMapper));
    return Promise.resolve();
  };

  const productUiMapper = (product: any): ProductUiProps => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      thumbnail: product.thumbnail,
      permalink: product.permalink,
    };
  };

  return [products, getProducts, searchProducts];
}
