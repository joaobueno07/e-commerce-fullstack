"use client";

import ContainerApplication from "@/components/ContainerApplication/ContainerApplication";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginImage from "../../../public/login_secure.svg";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [isUser, setIsUser] = useState(true);

  return (
    <ContainerApplication>
      <div className="w-full h-175 flex flex-col items-center">
        <h1 className="font-bold text-center my-10 text-2xl">
          Entre na sua seção e acesse seus dados
        </h1>
        <div className="w-11/12 h-1/2 flex items-center justify-evenly mt-4">
          <div className="mt-4">
            <h1 className="font-bold text-center text-xl">
              Faça o {isUser === false ? "cadastro" : "login"} da sua conta
            </h1>

            <div className="w-96 h-80 border rounded-lg p-6 mt-2">
              <form>
                {isUser === false && (
                  <Field className="mb-3">
                    <Label>Nome Completo:</Label>
                    <Input placeholder="Insira seu nome completo" />
                  </Field>
                )}

                <Field className="mb-3">
                  <Label>Email:</Label>
                  <Input placeholder="Insira seu e-mail" />
                </Field>

                <Field>
                  <Label>Senha:</Label>
                  <Input placeholder="Digite sua senha" />
                </Field>

                <Button className="w-full mt-4">Acessar minha conta</Button>
                <p className="text-sm text-center mt-1">
                  Não é cadastrado ainda ?{" "}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() => setIsUser(!isUser)}
                  >
                    Clique aqui
                  </span>
                </p>
              </form>
            </div>
          </div>

          <Image
            src={loginImage}
            width={600}
            height={800}
            alt=""
            className="w-150 h-200"
          />
        </div>
      </div>
    </ContainerApplication>
  );
}
