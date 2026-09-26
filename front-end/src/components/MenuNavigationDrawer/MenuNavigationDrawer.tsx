"use client";

import {
  BookOpenText,
  Home,
  Mars,
  Menu,
  Tags,
  Venus,
  XIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Dispatch, SetStateAction, useState } from "react";

export default function MenuNavigationDrawer({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="sm:hidden flex items-center">
      <Sheet open={openDrawer} onOpenChange={setOpenDrawer}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>
              <div className="w-full flex justify-between items-center">
                <h1>Menu</h1>
                <XIcon size={18} onClick={() => setOpenDrawer(false)} />
              </div>
            </SheetTitle>

            <SheetDescription>
              Escolha uma opção para navegar pela aplicação.
            </SheetDescription>
          </SheetHeader>

          <ul className="p-4 flex flex-col gap-1">
            <li className="flex items-center gap-3">
              <Home size={16} /> Pagina Inicial
            </li>

            <li className="flex items-center gap-3">
              <BookOpenText size={16} />
              Catálogo
            </li>

            <li className="flex items-center gap-3">
              <Venus size={16} />
              Feminino
            </li>

            <li className="flex items-center gap-3">
              <Mars size={16} />
              Masculino
            </li>

            <li className="flex items-center gap-3">
              <Tags size={16} />
              Promoções
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
