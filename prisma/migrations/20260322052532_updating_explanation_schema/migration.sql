/*
  Warnings:

  - The values [PENDING] on the enum `ExplanationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExplanationStatus_new" AS ENUM ('CANCELLED', 'COMPLETED', 'FAILED', 'INPROGRESS', 'INCOMPLETE', 'QUEUED');
ALTER TABLE "public"."Explanation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Explanation" ALTER COLUMN "status" TYPE "ExplanationStatus_new" USING ("status"::text::"ExplanationStatus_new");
ALTER TYPE "ExplanationStatus" RENAME TO "ExplanationStatus_old";
ALTER TYPE "ExplanationStatus_new" RENAME TO "ExplanationStatus";
DROP TYPE "public"."ExplanationStatus_old";
ALTER TABLE "Explanation" ALTER COLUMN "status" SET DEFAULT 'INPROGRESS';
COMMIT;

-- AlterTable
ALTER TABLE "Explanation" ALTER COLUMN "status" SET DEFAULT 'INPROGRESS';
