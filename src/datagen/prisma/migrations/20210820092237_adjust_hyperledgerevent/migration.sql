/*
  Warnings:

  - Added the required column `orderNumber` to the `HyperledgerEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HyperledgerEvent` ADD COLUMN `invoiceNumber` VARCHAR(191),
    ADD COLUMN `orderNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `TxnLookup` ADD COLUMN `invoiceNumber` VARCHAR(191);
