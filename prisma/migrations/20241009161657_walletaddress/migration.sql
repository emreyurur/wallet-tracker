/*
  Warnings:

  - Added the required column `walletAddress` to the `Spending` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spending" ADD COLUMN     "walletAddress" TEXT NOT NULL;
