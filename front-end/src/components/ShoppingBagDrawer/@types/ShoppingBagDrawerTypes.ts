import { ShoppingBagProducts } from "@/features/Products/@types/ProductTypes";

export interface ShoppingBagStore {
  shoppingBag: ShoppingBagProducts[];
  addToCart: (product: ShoppingBagProducts) => void;
  removeToCart: (product: ShoppingBagProducts) => void;
  addQuantity: () => void;
  removeQuantity: () => void;
}
