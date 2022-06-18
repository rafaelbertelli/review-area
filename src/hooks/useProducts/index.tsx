import { useState } from "react";

import { api } from "../../@seedwork/apiClient/api";
import { ProductUiProps } from "../../@seedwork/domain/Product/type";
import apiRoute from "../../@seedwork/routes/apiRoutes";

export default function useProducts(): any[] {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (): Promise<void> => {
    const result = await api.get(apiRoute.PRODUCTS);

    console.log(result.data.products.results[0]);

    setProducts(result.data.products.results.map(productUiMapper));
    setPagination(result.data.products.paging);
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

  return [products, pagination, getProducts];
}
