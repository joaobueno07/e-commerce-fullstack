import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { CheckoutTabs } from "../../@types/Checkout";
import UserInfoForm from "./components/UserInfoForm";

export default function UserInfo({
  setChangeTabs,
}: {
  setChangeTabs: Dispatch<SetStateAction<CheckoutTabs>>;
}) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2">
            <User size={20} /> Informações de Contato
          </CardTitle>

          <CardDescription>
            Insira seus dados pessoais para seguir para a próxima etapa.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground">
          <UserInfoForm setChangeTabs={setChangeTabs} />
        </CardContent>
      </Card>
    </div>
  );
}
