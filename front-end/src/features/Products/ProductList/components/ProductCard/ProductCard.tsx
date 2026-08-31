import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/features/Products/@types/ProductTypes";
import { useShoppingBagStore } from "@/features/Products/hooks/useShoppingBagStore";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";

export default function ProductCard({ product }: { product: Products }) {
  const addToCart = useShoppingBagStore((state) => state.addToCart);

  return (
    <div className="mt-3 h-96">
      <div className="border p-4 flex justify-center rounded-lg">
        <Link href={`/produtos/${product.id}`}>
          <Image
            src={(product.images && product.images[0]) || product.thumbnail}
            width={200}
            height={400}
            className="w-auto h-auto"
            alt="imagem do produto"
          />
        </Link>
      </div>

      <div className="w-full mt-2 flex flex-col justify-left p-2">
        <div className="mb-2 flex flex-col gap-1">
          <h1 className="truncate">{product.title}</h1>
          <h2>{toCurrencyBRL(product.price)}</h2>
        </div>

        <Button
          className="cursor-pointer"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          <ShoppingCart /> Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}
