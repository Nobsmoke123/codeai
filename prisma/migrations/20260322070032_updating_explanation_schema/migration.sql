/*
  Warnings:

  - A unique constraint covering the columns `[user_id,code_hash]` on the table `Explanation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code_hash` to the `Explanation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Explanation" ADD COLUMN     "code_hash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Explanation_user_id_code_hash_key" ON "Explanation"("user_id", "code_hash");
