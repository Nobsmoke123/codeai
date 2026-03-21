/*
  Warnings:

  - You are about to drop the column `explanation` on the `Explanation` table. All the data in the column will be lost.
  - You are about to drop the column `is_deleted` on the `Explanation` table. All the data in the column will be lost.
  - Added the required column `longSummary` to the `Explanation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `raw_response_json` on the `Explanation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Explanation_user_id_key";

-- AlterTable
ALTER TABLE "Explanation" DROP COLUMN "explanation",
DROP COLUMN "is_deleted",
ADD COLUMN     "completion_tokens" INTEGER,
ADD COLUMN     "longSummary" TEXT NOT NULL,
ADD COLUMN     "prompt_tokens" INTEGER,
ADD COLUMN     "total_tokens" INTEGER,
ALTER COLUMN "optimization_tip" DROP NOT NULL,
DROP COLUMN "raw_response_json",
ADD COLUMN     "raw_response_json" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "ExplanationStep" (
    "id" BIGSERIAL NOT NULL,
    "explanation_id" BIGINT NOT NULL,
    "step_number" INTEGER NOT NULL,
    "line_start" INTEGER NOT NULL,
    "line_end" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExplanationStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExplanationStep_explanation_id_idx" ON "ExplanationStep"("explanation_id");

-- CreateIndex
CREATE UNIQUE INDEX "ExplanationStep_explanation_id_created_at_key" ON "ExplanationStep"("explanation_id", "created_at" ASC);

-- CreateIndex
CREATE INDEX "Explanation_user_id_created_at_idx" ON "Explanation"("user_id", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "ExplanationStep" ADD CONSTRAINT "ExplanationStep_explanation_id_fkey" FOREIGN KEY ("explanation_id") REFERENCES "Explanation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
