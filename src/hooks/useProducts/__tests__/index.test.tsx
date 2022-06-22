import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useProducts from "..";
import { api } from "../../../@seedwork/apiClient/api";

import { mockGetProductsResult, mockSearchProductsResult } from "../__mocks__";

describe("useProducts", () => {
  it("should start with empty products list", () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.products).toEqual([]);
  });

  it("should start with empty favoriteProducts list", () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.favoriteProducts).toEqual([]);
  });

  it("should get products", async () => {
    const spyOnGet = jest.spyOn(api, "get");
    spyOnGet.mockImplementation(() => Promise.resolve(mockGetProductsResult));

    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await result.current.getProducts();
    });

    expect(result.current.products).toEqual(
      mockGetProductsResult.data.products.results
    );
  });

  it("should search products", async () => {
    const spyOnGet = jest.spyOn(api, "get");
    spyOnGet.mockImplementation(() =>
      Promise.resolve(mockSearchProductsResult)
    );

    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await result.current.searchProducts("Product 2");
    });

    expect(spyOnGet).toHaveBeenCalledWith("/products/search?term=Product%202");
    expect(result.current.products).toEqual(
      mockSearchProductsResult.data.products.results
    );
  });
});
