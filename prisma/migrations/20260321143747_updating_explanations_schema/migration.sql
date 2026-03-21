/*
  Warnings:

  - You are about to drop the column `code_language` on the `Explanation` table. All the data in the column will be lost.
  - Added the required column `language` to the `Explanation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Explanation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raw_response_json` to the `Explanation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Explanation" DROP COLUMN "code_language",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "raw_response_json" TEXT NOT NULL;
