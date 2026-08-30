import Image from "next/image";
import Instagram from "../../../public/instagram.svg";
import Facebook from "../../../public/facebook.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex gap-4 my-4">
      <Link href="" className="cursor-pointer">
        <Image src={Facebook} width={20} alt="" />
      </Link>

      <Link href="" className="cursor-pointer">
        <Image src={Instagram} width={20} alt="" />
      </Link>

      <Link href="" className="cursor-pointer">
        <Image src={Whatsapp} width={20} alt="" />
      </Link>
    </div>
  );
}
