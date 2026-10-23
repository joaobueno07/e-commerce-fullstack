/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('CUSTOMER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "UserStatus" NOT NULL;
