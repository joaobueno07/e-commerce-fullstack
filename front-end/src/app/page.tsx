"use client";
import ContainerApplication from "@/components/ContainerApplication/ContainerApplication";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import { useGetProductByCategory } from "@/components/ProductCarousel/hooks/useGetProductByCategory";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";

export default function Home() {
  const { products } = useGetProductByCategory("smartphones", "5");
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      <ContainerApplication>
        <MainCarousel />
        <ProductCarousel
          products={(products && products.products) || []}
          categoryName="Smartphones"
          arrows={false}
        />
        {/* <ProductList /> */}
      </ContainerApplication>
    </div>
  );
}
