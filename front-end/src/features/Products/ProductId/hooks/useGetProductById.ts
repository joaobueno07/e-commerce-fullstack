import useSWR from "swr";
import { Products } from "../../@types/ProductTypes";
import { fetcher } from "@/utils/fetcher";

export function useGetProductById(id: string) {
  const { data, mutate, isValidating, isLoading, error } = useSWR<Products>(
    `https://dummyjson.com/products/${id}`,
    fetcher,
  );

  return {
    product: data,
    mutate,
    isValidating,
    isLoading,
    error,
  };
}
