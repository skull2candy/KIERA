/*
  Warnings:

  - The values [WON,LOST] on the enum `EnquiryStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."EnquiryStatus_new" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'CLOSED');
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" TYPE "public"."EnquiryStatus_new" USING ("status"::text::"public"."EnquiryStatus_new");
ALTER TYPE "public"."EnquiryStatus" RENAME TO "EnquiryStatus_old";
ALTER TYPE "public"."EnquiryStatus_new" RENAME TO "EnquiryStatus";
DROP TYPE "public"."EnquiryStatus_old";
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;
