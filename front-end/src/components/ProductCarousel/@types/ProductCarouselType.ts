import { Products } from "@/features/Products/@types/ProductTypes";

export interface ProductCarouselType {
  products: Products[];
  categoryName: string;
  arrows: boolean;
}
