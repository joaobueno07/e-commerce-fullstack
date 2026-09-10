import { ShoppingBagProducts } from "@/features/Products/@types/ProductTypes";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";
import { ColumnDef, tableFeatures } from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";

export const features = tableFeatures({});

export function productColumns(
  removeToCart: (product: ShoppingBagProducts) => void,
) {
  const productColumns: ColumnDef<typeof features, ShoppingBagProducts>[] = [
    {
      accessorKey: "title",
      header: "Nome do Produto",
    },
    {
      header: "Preço",
      accessorKey: "price",
      cell: ({ row }) => {
        return toCurrencyBRL(row.original.price);
      },
    },
    {
      header: "Estoque",
      accessorKey: "quantity",
      cell: ({ row }) => {
        return (
          <div className="w-1/4 flex justify-center">
            {row.original.quantity}
          </div>
        );
      },
    },
    {
      header: "Categoria",
      accessorKey: "category",
    },
    {
      header: "Ações",
      cell: ({ cell, row }) => {
        return (
          <div className="w-1/3 flex justify-center gap-2">
            <Edit size={20} className="cursor-pointer" />

            <Trash2
              size={20}
              color="red"
              onClick={() => removeToCart(row.original)}
              className="cursor-pointer"
            />
          </div>
        );
      },
    },
  ];

  return productColumns;
}
