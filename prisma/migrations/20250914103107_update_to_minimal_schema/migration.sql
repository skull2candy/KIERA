/*
  Warnings:

  - The values [QUALIFIED,CONVERTED,CLOSED] on the enum `EnquiryStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [UPCOMING,ONGOING,DELIVERED] on the enum `ProjectStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [EDITOR,VIEWER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `metadata` on the `enquiries` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `enquiries` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `enquiries` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `enquiries` table. All the data in the column will be lost.
  - You are about to drop the column `area` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `locality` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `longDescription` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `metaDescription` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `metaKeywords` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `metaTitle` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `possessionDate` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `priceBand` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `priceText` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `reraId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `startingPrice` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `amenities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `audit_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `floor_plans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gallery_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project_amenities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unit_types` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `projectId` on table `enquiries` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."EnquiryStatus_new" AS ENUM ('NEW', 'CONTACTED', 'WON', 'LOST');
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" TYPE "public"."EnquiryStatus_new" USING ("status"::text::"public"."EnquiryStatus_new");
ALTER TYPE "public"."EnquiryStatus" RENAME TO "EnquiryStatus_old";
ALTER TYPE "public"."EnquiryStatus_new" RENAME TO "EnquiryStatus";
DROP TYPE "public"."EnquiryStatus_old";
ALTER TABLE "public"."enquiries" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."ProjectStatus_new" AS ENUM ('DRAFT', 'PUBLISHED');
ALTER TABLE "public"."projects" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."projects" ALTER COLUMN "status" TYPE "public"."ProjectStatus_new" USING ("status"::text::"public"."ProjectStatus_new");
ALTER TYPE "public"."ProjectStatus" RENAME TO "ProjectStatus_old";
ALTER TYPE "public"."ProjectStatus_new" RENAME TO "ProjectStatus";
DROP TYPE "public"."ProjectStatus_old";
ALTER TABLE "public"."projects" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."UserRole_new" AS ENUM ('ADMIN');
ALTER TABLE "public"."users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."users" ALTER COLUMN "role" TYPE "public"."UserRole_new" USING ("role"::text::"public"."UserRole_new");
ALTER TYPE "public"."UserRole" RENAME TO "UserRole_old";
ALTER TYPE "public"."UserRole_new" RENAME TO "UserRole";
DROP TYPE "public"."UserRole_old";
ALTER TABLE "public"."users" ALTER COLUMN "role" SET DEFAULT 'ADMIN';
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."enquiries" DROP CONSTRAINT "enquiries_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."enquiries" DROP CONSTRAINT "enquiries_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."floor_plans" DROP CONSTRAINT "floor_plans_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."gallery_images" DROP CONSTRAINT "gallery_images_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."locations" DROP CONSTRAINT "locations_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."project_amenities" DROP CONSTRAINT "project_amenities_amenityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."project_amenities" DROP CONSTRAINT "project_amenities_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."unit_types" DROP CONSTRAINT "unit_types_projectId_fkey";

-- AlterTable
ALTER TABLE "public"."enquiries" DROP COLUMN "metadata",
DROP COLUMN "ownerId",
DROP COLUMN "source",
DROP COLUMN "updatedAt",
ALTER COLUMN "projectId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."projects" DROP COLUMN "area",
DROP COLUMN "city",
DROP COLUMN "locality",
DROP COLUMN "longDescription",
DROP COLUMN "metaDescription",
DROP COLUMN "metaKeywords",
DROP COLUMN "metaTitle",
DROP COLUMN "possessionDate",
DROP COLUMN "priceBand",
DROP COLUMN "priceText",
DROP COLUMN "published",
DROP COLUMN "publishedAt",
DROP COLUMN "reraId",
DROP COLUMN "shortDescription",
DROP COLUMN "startingPrice",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "createdAt",
DROP COLUMN "password",
DROP COLUMN "updatedAt",
ALTER COLUMN "role" SET DEFAULT 'ADMIN';

-- DropTable
DROP TABLE "public"."Account";

-- DropTable
DROP TABLE "public"."Session";

-- DropTable
DROP TABLE "public"."VerificationToken";

-- DropTable
DROP TABLE "public"."amenities";

-- DropTable
DROP TABLE "public"."audit_logs";

-- DropTable
DROP TABLE "public"."floor_plans";

-- DropTable
DROP TABLE "public"."gallery_images";

-- DropTable
DROP TABLE "public"."locations";

-- DropTable
DROP TABLE "public"."project_amenities";

-- DropTable
DROP TABLE "public"."unit_types";

-- DropEnum
DROP TYPE "public"."PriceBand";

-- CreateTable
CREATE TABLE "public"."accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "public"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "public"."sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_token_key" ON "public"."verificationtokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "public"."verificationtokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."enquiries" ADD CONSTRAINT "enquiries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
