import { ProductRespose } from "@/features/Products/@types/ProductTypes";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function useGetProductByCategory(
  categoryName: string,
  productNumber: string,
) {
  const { data, mutate, isValidating, isLoading, error } =
    useSWR<ProductRespose>(
      `https://dummyjson.com/products/category/${categoryName}?limit=${productNumber}`,
      fetcher,
    );

  return {
    products: data,
    mutate,
    isValidating,
    isLoading,
    error,
  };
}
