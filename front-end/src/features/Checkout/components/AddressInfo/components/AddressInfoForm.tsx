import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { addressInfoSchema } from "../@types/AddressInfo";

export default function AddressInfoForm() {
  const form = useForm({ resolver: zodResolver(addressInfoSchema) });
  return (
    <div>
      <form>
        <div className="my-2">
          <Field>
            <FieldLabel>Nome da Rua: </FieldLabel>
            <Input />
          </Field>
        </div>

        <div className="my-2">
          <Field>
            <FieldLabel>Nome do Bairro: </FieldLabel>
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
