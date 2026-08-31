import ProductId from "@/features/Products/ProductId/ProductId";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductId productId={id} />;
}
