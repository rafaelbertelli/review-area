import { useEffect } from "react";
import { api } from "../../@seedwork/apiClient/api";
import safeURI from "../../@seedwork/apiClient/safe-uri";
import apiRoute from "../../@seedwork/routes/apiRoutes";
import DashboardHeader from "../DashboardHeader";
import useProducts from "../../hooks/useProducts";
import { ProductUiProps } from "../../@seedwork/domain/Product/type";
import Link from "next/link";

export default function Dashboard() {
  const [products, pagination, getProducts] = useProducts();

  const search = async (term: string) => {
    const response = await api.get(
      `${apiRoute.PRODUCTS_SEARCH}?term=${safeURI(term)}`
    );
    console.log("response", response);
  };

  useEffect(() => {
    const _getProducts = async () => await getProducts();
    _getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <DashboardHeader searchBy={search} />
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div className="flex flex-col flex-grow items-center bg-white rounded-xl mt-4 p-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product: ProductUiProps) => {
              return (
                <div
                  key={product.id}
                  className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-auto w-full"
                  />
                  <div className="p-5">
                    <p className="text-medium mb-5 text-gray-700">
                      {product.title}
                    </p>
                    <Link href={product.permalink}>
                      <a className="text-blue-500 hover:text-blue-700">
                        Ver produto
                      </a>
                    </Link>
                    {/* <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
                      See More
                    </button> */}
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
