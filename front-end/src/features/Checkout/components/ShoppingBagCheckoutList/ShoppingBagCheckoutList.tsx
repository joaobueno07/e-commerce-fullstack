import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useShoppingBagStore } from "@/features/Products/hooks/useShoppingBagStore";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function ShoppingBagCheckoutList() {
  const shoppingBag = useShoppingBagStore((state) => state.shoppingBag);
  const removeToCart = useShoppingBagStore((state) => state.removeToCart);

  const totalValue = shoppingBag.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="w-1/2 h-2/4 p-4 border rounded-xl">
      <h1 className="font-bold text-xl">
        Produtos que fazem parte do seu pedido.
      </h1>

      <div className="flex flex-col gap-6  mt-2">
        {shoppingBag.map((product, index) => {
          return (
            <div key={index}>
              <div className="flex gap-3 items-center">
                <Image
                  src={product.images[0]}
                  width={60}
                  height={60}
                  alt=""
                  className="w-15 h-15"
                />

                <div className="w-full">
                  <h1 className="font-bold">{product.title}</h1>
                  <h2>SKU: {product.sku}</h2>
                  <p>Categoria: {product.category}</p>
                  <p>Quantidade: {product.quantity}</p>
                  <p>{toCurrencyBRL(product.price)}</p>
                </div>

                <div>
                  <Button onClick={() => removeToCart(product)}>
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Separator className="my-3" />

      <div className="flex items-center justify-between">
        <h1>Total a pagar: {toCurrencyBRL(totalValue)}</h1>

        <Button>Finalizar sua compra</Button>
      </div>
    </div>
  );
}
