import { useState } from "react";

import { api } from "../../@seedwork/apiClient/api";
import safeURI from "../../@seedwork/apiClient/safe-uri";
import { ProductUiProps } from "../../@seedwork/domain/Product/type";
import apiRoute from "../../@seedwork/routes/apiRoutes";

type RatingProps = {
  product: ProductUiProps;
  ratingValue: number;
};

export default function useProducts(): [
  ProductUiProps[],
  ProductUiProps[],
  () => Promise<void>,
  (term: string) => Promise<void>,
  (product: ProductUiProps) => void,
  (props: RatingProps) => void
] {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductUiProps[]>(
    []
  );
  const [ratingProducts, setRatingProducts] = useState<ProductUiProps[]>([]);

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

  const setFavoriteProduct = (product: ProductUiProps): void => {
    const newFavoriteProducts = [...favoriteProducts];
    const index = newFavoriteProducts.findIndex((p) => p.id === product.id);

    if (index === -1) {
      newFavoriteProducts.push(product);
    } else {
      newFavoriteProducts.splice(index, 1);
    }
    setFavoriteProducts(newFavoriteProducts);
  };

  function handleRatingProduct({ product, ratingValue }: RatingProps): void {
    console.log(ratingValue, product);

    const newRatingProducts = [...favoriteProducts];
    const index = newRatingProducts.findIndex((p) => p.id === product.id);

    if (index === -1) {
      newRatingProducts.push(product);
    }
    setRatingProducts(newRatingProducts);
  }

  const productUiMapper = (product: ProductUiProps): ProductUiProps => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      thumbnail: product.thumbnail,
      permalink: product.permalink,
    };
  };

  return [
    products,
    favoriteProducts,
    getProducts,
    searchProducts,
    setFavoriteProduct,
    handleRatingProduct,
  ];
}
