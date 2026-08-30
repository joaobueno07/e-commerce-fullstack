"use client";

import { ShoppingBag, XIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Dispatch, SetStateAction } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useShoppingBagStore } from "@/features/Products/hooks/useShoppingBagStore";
import ShoppingBagList from "./components/ShoppingBagList/ShoppingBagList";

export default function ShoppingBagDrawer({
  openShoppingBagDrawer,
  setOpenShoppingBagDrawer,
}: {
  openShoppingBagDrawer: boolean;
  setOpenShoppingBagDrawer: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const shoppingBag = useShoppingBagStore((state) => state.shoppingBag);
  const removeToCart = useShoppingBagStore((state) => state.removeToCart);

  return (
    <Sheet open={openShoppingBagDrawer} onOpenChange={setOpenShoppingBagDrawer}>
      <SheetTrigger className="relative inline-flex gap-4 cursor-pointer">
        <ShoppingBag size={20} />

        <Badge className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full px-1 text-xs">
          {shoppingBag.length}
        </Badge>
      </SheetTrigger>

      <SheetContent showCloseButton={false} className="w-full">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between items-center">
              <h1>Sacola de Compras</h1>
              <XIcon
                className="cursor-pointer"
                size={18}
                onClick={() => setOpenShoppingBagDrawer(false)}
              />
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="w-96 h-auto scroll-auto">
          {shoppingBag.length > 0 ? (
            shoppingBag.map((item, index) => {
              return (
                <div key={index}>
                  <ShoppingBagList item={item} removeToCart={removeToCart} />
                </div>
              );
            })
          ) : (
            <div className="text-sm flex justify-center items-center">
              <h1>Não há produtos adicionados na sacola.</h1>
            </div>
          )}

          <div className="w-full flex justify- my-3 pl-3">
            <Button className="w-full" onClick={() => router.push("/checkout")}>
              Finalizar compra
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
