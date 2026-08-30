"use client";

import { Menu, XIcon } from "lucide-react";
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
