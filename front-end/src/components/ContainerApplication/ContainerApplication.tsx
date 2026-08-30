import { ReactNode } from "react";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import Footer from "../Footer/Footer";

export default function ContainerApplication({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MenuNavigation />
      <div className="w-11/12 p-2 pt-16">{children}</div>
      <Footer />
    </div>
  );
}
