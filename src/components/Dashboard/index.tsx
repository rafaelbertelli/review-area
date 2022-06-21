import Link from "next/link";
import { useEffect } from "react";

import { ProductUiProps } from "../../@seedwork/domain/Product/type";
import useProducts from "../../hooks/useProducts";
import DashboardHeader from "../DashboardHeader";
import Rating from "../Rating";

export default function Dashboard() {
  const {
    products,
    favoriteProducts,
    getProducts,
    searchProducts,
    setFavoriteProduct,
    handleRatingProduct,
  } = useProducts();

  useEffect(() => {
    const _getProducts = async () => await getProducts();
    _getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <DashboardHeader searchBy={searchProducts} />
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div className="flex flex-col flex-grow items-center bg-white rounded-xl mt-4 p-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product: ProductUiProps) => {
              const checkedProduct = favoriteProducts.some(
                (p) => p.id === product.id
              );

              return (
                <div
                  key={product.id}
                  className="max-w-[300px] overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex justify-center pt-4 pb-1">
                    <Rating onChange={handleRatingProduct} product={product} />
                  </div>

                  <Link href={product.permalink}>
                    <a
                      target={"_blank"}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-auto w-full"
                      />
                    </a>
                  </Link>

                  <div className="p-5">
                    <p className="text-medium mb-5 text-gray-700">
                      {product.title}
                    </p>

                    <div className="form-check">
                      <label className="form-check-label inline-block text-gray-800 cursor-pointer">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          checked={checkedProduct}
                          onChange={() => setFavoriteProduct(product)}
                        />
                        {checkedProduct ? "Favorito" : "Favoritar"}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
