/*
  Warnings:

  - The values [CONVERTED,CLOSED] on the enum `EnquiryStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `area` on the `floor_plans` table. All the data in the column will be lost.
  - You are about to drop the column `bathrooms` on the `floor_plans` table. All the data in the column will be lost.
  - You are about to drop the column `bedrooms` on the `floor_plans` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `floor_plans` table. All the data in the column will be lost.
  - You are about to drop the column `unitTypeId` on the `floor_plans` table. All the data in the column will be lost.
  - You are about to drop the column `alt` on the `gallery_images` table. All the data in the column will be lost.
  - You are about to drop the column `caption` on the `gallery_images` table. All the data in the column will be lost.
  - You are about to drop the column `isPrimary` on the `gallery_images` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."EnquiryStatus_new" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST');
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" TYPE "public"."EnquiryStatus_new" USING ("status"::text::"public"."EnquiryStatus_new");
ALTER TYPE "public"."EnquiryStatus" RENAME TO "EnquiryStatus_old";
ALTER TYPE "public"."EnquiryStatus_new" RENAME TO "EnquiryStatus";
DROP TYPE "public"."EnquiryStatus_old";
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;

-- AlterEnum
ALTER TYPE "public"."UserRole" ADD VALUE 'VIEWER';

-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."enquiries" DROP CONSTRAINT "enquiries_projectId_fkey";

-- AlterTable
ALTER TABLE "public"."enquiries" ADD COLUMN     "ownerId" TEXT,
ALTER COLUMN "projectId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."floor_plans" DROP COLUMN "area",
DROP COLUMN "bathrooms",
DROP COLUMN "bedrooms",
DROP COLUMN "order",
DROP COLUMN "unitTypeId";

-- AlterTable
ALTER TABLE "public"."gallery_images" DROP COLUMN "alt",
DROP COLUMN "caption",
DROP COLUMN "isPrimary",
ADD COLUMN     "altText" TEXT;

-- AlterTable
ALTER TABLE "public"."projects" ADD COLUMN     "area" TEXT,
ADD COLUMN     "coverUrl" TEXT,
ADD COLUMN     "priceText" TEXT,
ALTER COLUMN "priceBand" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'EDITOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."audit_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "changes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."enquiries" ADD CONSTRAINT "enquiries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."enquiries" ADD CONSTRAINT "enquiries_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."audit_logs" ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."audit_logs" ADD CONSTRAINT "audit_logs_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
