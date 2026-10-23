/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - The `status` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProductBrand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `ProductBrand` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'ACTIVE', 'INACTIVE', 'ARCHIVED');

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_variantId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOption" DROP CONSTRAINT "ProductOption_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOptionValue" DROP CONSTRAINT "ProductOptionValue_optionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_productId_fkey";

-- DropForeignKey
ALTER TABLE "VariantOptionValue" DROP CONSTRAINT "VariantOptionValue_optionValueId_fkey";

-- DropForeignKey
ALTER TABLE "VariantOptionValue" DROP CONSTRAINT "VariantOptionValue_variantId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "ProductBrand" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBrand_slug_key" ON "ProductBrand"("slug");

-- AddForeignKey
ALTER TABLE "ProductOption" ADD CONSTRAINT "ProductOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionValue" ADD CONSTRAINT "VariantOptionValue_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionValue" ADD CONSTRAINT "VariantOptionValue_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "ProductOptionValue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOptionValue" ADD CONSTRAINT "ProductOptionValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ProductOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
