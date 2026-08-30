import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBagProducts } from "@/features/Products/@types/ProductTypes";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function ShoppingBagList({
  item,
  removeToCart,
}: {
  item: ShoppingBagProducts;
  removeToCart: (product: ShoppingBagProducts) => void;
}) {
  return (
    <div className="pl-4">
      <div className="flex flex-row gap-4">
        <div className="flex border rounded-sm justify-center items-center">
          <Image src={item.thumbnail} width={100} height={100} alt="" />
        </div>

        <div className="w-full">
          <h1 className="font-bold">{item.title}</h1>
          <h1>SKU: {item.sku}</h1>

          <div className="flex justify-between">
            <p>R$ {item.price}</p>
          </div>
          <p>Quantidade: {item.quantity}</p>
        </div>
        <div className="flex justify-end items-center">
          <Button
            className="bg-red-500 text-white"
            onClick={() => removeToCart(item)}
          >
            <Trash2 />
          </Button>
        </div>
      </div>

      <Separator className="my-4" />
    </div>
  );
}
