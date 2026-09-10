"use client";

import TableData from "@/components/TableData/TableData";
import { useRouter } from "next/navigation";
import { tableFeatures, useTable } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useShoppingBagStore } from "@/features/Products/hooks/useShoppingBagStore";
import { productColumns } from "../utils/ProductColumns/productColumns";

export default function Product() {
  const router = useRouter();
  const shoppingBag = useShoppingBagStore((state) => state.shoppingBag);
  const removeToCart = useShoppingBagStore((state) => state.removeToCart);

  const productTableFeatures = tableFeatures({});

  const table = useTable({
    features: productTableFeatures,
    data: shoppingBag,
    columns: productColumns(removeToCart),
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Lista de Produtos Cadastrados</h1>

        <Button
          className="cursor-pointer"
          onClick={() => router.push("/admin/produtos/cadastrar-produtos")}
        >
          <Plus /> Cadastrar
        </Button>
      </div>

      <TableData table={table} />
    </div>
  );
}
