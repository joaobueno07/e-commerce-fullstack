import ProductCatalog from "@/features/Products/ProductList/components/ProductCatalog/ProductCatalog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCard from "@/features/Products/ProductList/components/ProductCard/ProductCard";
import { ProductCarouselType } from "./@types/ProductCarouselType";

export default function ProductCarousel({
  products,
  categoryName,
  arrows = true,
}: ProductCarouselType) {
  return (
    <div className="my-3">
      <h1 className="my-2 font-bold text-3xl">{categoryName}</h1>

      <Carousel className="">
        <CarouselContent className="">
          {products.map((product, index) => {
            return (
              <div className="w-full" key={index}>
                <CarouselItem className="">
                  <ProductCard product={product} />
                </CarouselItem>
              </div>
            );
          })}
        </CarouselContent>

        {arrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
}
