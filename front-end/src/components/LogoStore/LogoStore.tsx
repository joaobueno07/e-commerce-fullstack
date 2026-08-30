import Image from "next/image";
import logo from "../../../public/next.svg";
import Link from "next/link";

export default function LogoStore() {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          width={100}
          height={100}
          alt=""
          className="w-25 h-25"
        />
      </Link>
    </div>
  );
}
