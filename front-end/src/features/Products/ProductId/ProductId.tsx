"use client";

import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import ContainerApplication from "@/components/ContainerApplication/ContainerApplication";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Products, ShoppingBagProducts } from "../@types/ProductTypes";
import { useGetProductById } from "./hooks/useGetProductById";
import { useShoppingBagStore } from "../hooks/useShoppingBagStore";
import CarouselProductPhotos from "./components/CarouselProductPhotos/CarouselProductPhotos";

export default function ProductId({ productId }: { productId: string }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const { product } = useGetProductById(productId);
  const addToCart = useShoppingBagStore((state) => state.addToCart);

  const productAdded: ShoppingBagProducts = {
    ...(product || ({} as Products)),
    quantity,
  };

  return (
    <ContainerApplication>
      <div className="w-full flex gap-3 min-h-screen p-4">
        <div className="w-1/2 min-h-screen">
          {product && product.images.length <= 1 ? (
            <Image
              src={product?.images[0] || ""}
              width={600}
              height={100}
              alt=""
            />
          ) : (
            <CarouselProductPhotos productPhotos={product?.images || []} />
          )}
        </div>

        <div className="w-1/2 p-4 border rounded-md min-h-screen">
          <div className="p-2 mb-2">
            <h1 className="text-4xl font-bold mb-2">
              {product && product.title}
            </h1>
            <p className="text-sm">{product && product.description}</p>
          </div>

          <Separator />

          <div className=" p-2 mt-3">
            <p className="text-sm">Variações do produto</p>

            <div className="w-full flex gap-4 items-center px-3 h-24 border rounded-xl mt-3">
              <div className="w-1/3 flex p-3 justify-center items-center text-sm h-1/2 bg-slate-100 shadow ">
                <p>128GB de Armazenamento</p>
              </div>

              <div className="w-1/3 flex p-3 justify-center items-center h-1/2 text-sm bg-slate-100 shadow ">
                <p>256GB de Armazenamento</p>
              </div>

              <div className="w-1/3 flex p-3 justify-center items-center h-1/2 text-sm bg-slate-100 shadow ">
                <p>512GB de Armazenamento</p>
              </div>
            </div>
          </div>

          <div className="my-3 p-2">
            <p className="text-3xl font-bold">R$ {product?.price}</p>
            <p className="text-sm">ou 10x de 19.99 sem juros</p>
          </div>

          <div className="h-36 flex flex-col border rounded-xl p-3">
            <h1 className="text-lg">Descubra o preço do frete: </h1>
            <div className="w-full my-4">
              <Label className="my-2">Digite seu CEP para buscar:</Label>
              <Input className="w-1/3" placeholder="Ex: 12345-678" />
            </div>
          </div>

          <div className="w-full my-3 p-3 flex justify-between items-center">
            <div className="w-1/6">
              <InputGroup className="w-full">
                <InputGroupInput
                  className="text-center"
                  value={quantity}
                  onChange={() => setQuantity}
                />

                <InputGroupAddon>
                  <Minus className="cursor-pointer" />
                </InputGroupAddon>

                <InputGroupAddon align="inline-end">
                  <Plus className="cursor-pointer" />
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className="w-2/3 flex gap-2">
              <Button
                className="w-1/2"
                onClick={() => router.push("/checkout")}
              >
                Comprar Agora
              </Button>

              <Button className="w-1/2" onClick={() => addToCart(productAdded)}>
                <ShoppingBag /> Adicionar a sacola
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContainerApplication>
  );
}
