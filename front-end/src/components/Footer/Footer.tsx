"use client";

import Link from "next/link";
import LogoStore from "../LogoStore/LogoStore";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <div className="w-full h-64 flex border justify-evenly items-center">
      <div className="w-1/6 flex flex-col justify-center items-center h-64 p-3">
        <LogoStore />
        <SocialMedia />
      </div>

      <div className="w-4/6 h-40 flex justify-evenly items-center">
        <div>
          <h1 className="font-bold">Institucional</h1>

          <ul className="mt-2">
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">Loja</h1>

          <ul className="mt-2">
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">Formas de Pagamento</h1>

          <ul className="mt-2">
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
            <Link href="">
              <li>Link 1</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
