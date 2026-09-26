import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { CheckoutTabs } from "@/features/Checkout/@types/Checkout";
import { userInfoSchema } from "../@types/UserInfo";

export default function UserInfoForm({
  setChangeTabs,
}: {
  setChangeTabs: Dispatch<SetStateAction<CheckoutTabs>>;
}) {
  const form = useForm({
    resolver: zodResolver(userInfoSchema),
  });

  return (
    <div>
      <form>
        <div className="my-2">
          <Field>
            <FieldLabel>Nome Completo:</FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Data de Nascimento:</FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>E-mail:</FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Identidade:</FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="flex justify-end mt-3">
          <Button onClick={() => setChangeTabs("addressInfo")}>
            Salvar e Continuar
          </Button>
        </div>
      </form>
    </div>
  );
}
