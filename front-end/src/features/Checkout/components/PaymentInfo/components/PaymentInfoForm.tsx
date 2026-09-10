import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { CheckoutTabs } from "@/features/Checkout/@types/Checkout";
import { paymentInfoSchema } from "../@types/PaymentInfo";

export default function PaymentInfoForm({
  setChangeTabs,
}: {
  setChangeTabs: Dispatch<SetStateAction<CheckoutTabs>>;
}) {
  const form = useForm({
    resolver: zodResolver(paymentInfoSchema),
  });

  return (
    <div>
      <form>
        <div className="my-2">
          <Field>
            <FieldLabel>Nome da rua: </FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Nome do Bairro</FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Número: </FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Complemento: </FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Estado: </FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Cidade: </FieldLabel>
            <Input />
          </Field>
        </div>
      </form>
    </div>
  );
}
