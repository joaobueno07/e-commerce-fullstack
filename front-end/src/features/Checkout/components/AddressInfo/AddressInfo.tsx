import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CheckoutTabs } from "../../@types/Checkout";
import AddressInfoForm from "./components/AddressInfoForm";

export default function AddressInfo({
  setChangeTabs,
}: {
  setChangeTabs: Dispatch<SetStateAction<CheckoutTabs>>;
}) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Informações de Endereço</CardTitle>

          <CardDescription>
            Informe seu endereço e siga para finalizar o pedido.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground">
          <AddressInfoForm />

          <div className="w-full flex justify-between items-center h-14">
            <Button onClick={() => setChangeTabs("userInfo")}>
              <ArrowLeft size={18} /> Informações de Contato
            </Button>

            <Button onClick={() => setChangeTabs("paymentInfo")}>
              Salvar e Continuar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
