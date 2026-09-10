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
import PaymentInfoForm from "./components/PaymentInfoForm";

export default function PaymentInfo({
  setChangeTabs,
}: {
  setChangeTabs: Dispatch<SetStateAction<CheckoutTabs>>;
}) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Meio de Pagamento</CardTitle>

          <CardDescription>
            Preencha as informações de pagamento e realize sua compra!
          </CardDescription>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground">
          <PaymentInfoForm setChangeTabs={setChangeTabs} />

          <div className="w-full flex justify-between items-center h-14">
            <Button onClick={() => setChangeTabs("addressInfo")}>
              <ArrowLeft size={18} /> Informações de Endereço
            </Button>

            <Button>Salvar Meio de Pagamento</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
