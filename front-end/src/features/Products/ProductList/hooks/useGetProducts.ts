import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ProductRespose } from "../../@types/ProductTypes";

export function useGetProducts() {
  const { data, mutate, isValidating, isLoading, error } =
    useSWR<ProductRespose>("https://dummyjson.com/products?limit=500", fetcher);

  const categories: string[] = [
    "smartphones",
    "tablets",
    "womens-watches",
    "mens-watches",
    "mobile-accessories",
  ];

  const products =
    data &&
    data.products.filter((product) => {
      return categories.includes(product.category);
    });

  return {
    products,
    mutate,
    isValidating,
    isLoading,
    error,
  };
}
