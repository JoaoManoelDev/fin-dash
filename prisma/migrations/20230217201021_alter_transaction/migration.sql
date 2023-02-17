/*
  Warnings:

  - You are about to drop the column `create_at` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `create_at`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
