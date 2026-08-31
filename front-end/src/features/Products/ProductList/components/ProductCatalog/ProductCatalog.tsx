import { Products } from "@/features/Products/@types/ProductTypes";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductCatalog({
  products,
}: {
  products: Products[] | undefined;
}) {
  return (
    <div className="w-full flex justify-center mt-2 min-h-screen">
      <div className="w-full grid grid-cols-4 gap-8">
        {products &&
          products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
      </div>
    </div>
  );
}
