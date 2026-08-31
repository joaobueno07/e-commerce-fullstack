"use client";

import { Separator } from "@/components/ui/separator";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import { useGetProducts } from "./hooks/useGetProducts";

export default function ProductList() {
  const { products } = useGetProducts();

  return (
    <div className="w-full mt-3">
      <h1 className="text-xl font-bold">Produtos</h1>
      <Separator />
      <ProductCatalog products={products} />
    </div>
  );
}
