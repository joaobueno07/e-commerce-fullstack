import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import bannerOne from "../../../public/banners/banner_1.png";
import bannerTwo from "../../../public/banners/banner_2.png";
import Image from "next/image";

export default function MainCarousel() {
  const banners = [bannerOne, bannerTwo];

  return (
    <div className="w-fullflex justify-center items-center">
      <Carousel>
        <CarouselContent className="w-full">
          {banners.map((banner, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <Image
                  src={banner}
                  width={1100}
                  height={1000}
                  alt=""
                  className="w-auto h-auto"
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
