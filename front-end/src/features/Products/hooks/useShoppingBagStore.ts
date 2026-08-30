import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ShoppingBagProducts } from "../@types/ProductTypes";
import { ShoppingBagStore } from "@/components/ShoppingBagDrawer/@types/ShoppingBagDrawerTypes";

// realizar a função addQuantity e removeQuantity

export const useShoppingBagStore = create<ShoppingBagStore>()(
  persist(
    (set, get) => {
      return {
        shoppingBag: [],
        addToCart: (product: ShoppingBagProducts) => {
          const existingProduct = get().shoppingBag.find(
            (item) => item.id === product.id,
          );

          if (existingProduct) {
            set((state) => {
              const shoppingBagProducts = state.shoppingBag.map((item) => {
                if (item.id === existingProduct.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }

                return item;
              });

              return { shoppingBag: shoppingBagProducts };
            });
          } else {
            set((state) => {
              return {
                shoppingBag: [...state.shoppingBag, { ...product }],
              };
            });
          }
        },
        removeToCart: (product: ShoppingBagProducts) => {
          const existingProduct = get().shoppingBag.find(
            (item) => item.id === product.id,
          );

          if (existingProduct) {
            if (existingProduct.quantity > 0) {
              set((state) => {
                const shoppingBagProductRemoved = state.shoppingBag.map(
                  (item) => {
                    if (item.id === existingProduct.id) {
                      return { ...item, quantity: item.quantity - 1 };
                    }

                    return item;
                  },
                );

                return { shoppingBag: shoppingBagProductRemoved };
              });
            }

            if (existingProduct.quantity <= 1) {
              set((state) => {
                return {
                  shoppingBag: state.shoppingBag.filter(
                    (item) => item.id !== existingProduct.id,
                  ),
                };
              });
            }
          }
        },
        addQuantity() {},
        removeQuantity() {},
      };
    },
    {
      name: "shoppingBagStorage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
