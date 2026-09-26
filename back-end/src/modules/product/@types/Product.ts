export type ProductStatus = 'active' | 'inactive';

export interface ProductType {
  id: number;
  name: string;
  description: string;
  status: ProductStatus;
  category: string;
  brand: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
