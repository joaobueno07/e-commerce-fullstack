import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselProductPhotos({
  productPhotos,
}: {
  productPhotos: string[];
}) {
  return (
    <div className="w-full flex justify-center h-full">
      <Carousel className="w-4/5 flex justify-center items-center">
        <CarouselContent>
          {productPhotos.map((photo, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  src={photo}
                  width={1000}
                  height={1000}
                  alt=""
                  className="w-full h-auto"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
