"use client";

import ContainerApplication from "@/components/ContainerApplication/ContainerApplication";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CreditCard, MapPinHouse, User } from "lucide-react";
import { CheckoutTabs, StepsPermission } from "./@types/Checkout";
import AddressInfo from "./components/AddressInfo/AddressInfo";
import UserInfo from "./components/UserInfo/UserInfo";
import PaymentInfo from "./components/PaymentInfo/PaymentInfo";
import ShoppingBagCheckoutList from "./components/ShoppingBagCheckoutList/ShoppingBagCheckoutList";

export default function Checkout() {
  const [permission, setPermission] = useState<StepsPermission>({
    userInfo: { locked: false },
    addressInfo: { locked: false },
    paymentInfo: { locked: true },
  });

  const [changeTabs, setChangeTabs] = useState<CheckoutTabs>("userInfo");

  function onTabChange(value: CheckoutTabs) {
    if (permission[value].locked === true) {
      setPermission((prev) => ({ ...prev, value: { locked: false } }));
      setChangeTabs(value);
    }
  }

  return (
    <ContainerApplication>
      <div className="w-full flex justify-between gap-8 min-h-screen">
        <Tabs
          defaultValue="userInfo"
          className="w-1/2"
          value={changeTabs}
          onValueChange={onTabChange}
        >
          <TabsList>
            <TabsTrigger value="userInfo" disabled={permission.userInfo.locked}>
              <User />
              Informações de Contato
            </TabsTrigger>

            <TabsTrigger
              value="addressInfo"
              disabled={permission.addressInfo.locked}
            >
              <MapPinHouse />
              Informações de Endereço
            </TabsTrigger>

            <TabsTrigger
              value="paymentInfo"
              disabled={permission.paymentInfo.locked}
            >
              <CreditCard />
              Meio de Pagamento
            </TabsTrigger>
          </TabsList>

          <TabsContent value="userInfo">
            <UserInfo setChangeTabs={setChangeTabs} />
          </TabsContent>

          <TabsContent value="addressInfo">
            <AddressInfo setChangeTabs={setChangeTabs} />
          </TabsContent>

          <TabsContent value="paymentInfo">
            <PaymentInfo setChangeTabs={setChangeTabs} />
          </TabsContent>
        </Tabs>

        <ShoppingBagCheckoutList />
      </div>
    </ContainerApplication>
  );
}
