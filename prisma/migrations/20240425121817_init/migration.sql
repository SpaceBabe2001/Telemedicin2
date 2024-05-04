/*
  Warnings:

  - You are about to drop the column `feces` on the `sundhedsData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sundhedsData" DROP COLUMN "feces",
ADD COLUMN     "type" TEXT;
