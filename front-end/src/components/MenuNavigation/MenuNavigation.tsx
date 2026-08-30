"use client";

import { Search, User } from "lucide-react";
import { useContext, useState } from "react";
import Link from "next/link";
import LogoStore from "../LogoStore/LogoStore";
import Categories from "./components/Categories/Categories";
import MenuNavigationDrawer from "../MenuNavigationDrawer/MenuNavigationDrawer";
import ShoppingBagDrawer from "../ShoppingBagDrawer/ShoppingBagDrawer";

export default function MenuNavigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openShoppingBagDrawer, setOpenShoppingBagDrawer] = useState(false);

  return (
    <div className="w-full h-14 flex justify-center items-center shadow top-0 z-50 bg-white fixed">
      <div className="w-11/12 h-14 flex justify-between items-center">
        <LogoStore />

        <div className="hidden sm:block">
          <Categories />
        </div>

        <div className="hidden sm:flex justify-end">
          <ul className="flex gap-3">
            <li>
              <Search size={20} className="cursor-pointer" />
            </li>

            <li>
              <Link href="/login">
                <User size={20} className="cursor-pointer" />
              </Link>
            </li>

            <li>
              <ShoppingBagDrawer
                openShoppingBagDrawer={openShoppingBagDrawer}
                setOpenShoppingBagDrawer={setOpenShoppingBagDrawer}
              />
            </li>
          </ul>
        </div>

        <MenuNavigationDrawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      </div>
    </div>
  );
}
