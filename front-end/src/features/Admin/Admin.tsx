"use client";

export default function Admin() {
  return (
    <div className="w-full min-h-screen p-3">
      <div>
        <h1>Olá Admin</h1>
      </div>

      <div className=" flex justify-evenly items-center h-52">
        <div className="w-1/6 p-2 border rounded-xl h-40">
          <h1 className="text-center">Pedidos</h1>
        </div>

        <div className="w-1/6 p-2 border rounded-xl h-40">
          <h1 className="text-center">Faturamento diário</h1>
        </div>

        <div className="w-1/6 p-2 border rounded-xl h-40">
          <div className=" w-full  flex flex-col justify-center">
            <h1 className="text-center">Produtos Vendidos</h1>
          </div>
        </div>

        <div className="w-1/6 p-2 border rounded-xl h-40">
          <div className=" w-full  flex flex-col justify-center">
            <h1 className="text-center">Novos Usuários</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
