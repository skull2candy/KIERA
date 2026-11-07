-- CreateEnum
CREATE TYPE "public"."ActivityType" AS ENUM ('PROJECT_CREATED', 'PROJECT_UPDATED', 'PROJECT_DELETED', 'PROJECT_PUBLISHED', 'PROJECT_UNPUBLISHED', 'ENQUIRY_CREATED', 'ENQUIRY_STATUS_CHANGED');

-- AlterTable
ALTER TABLE "public"."projects" ADD COLUMN     "amenities" TEXT[],
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "possessionDate" TIMESTAMP(3),
ADD COLUMN     "priceRange" TEXT,
ADD COLUMN     "reraId" TEXT,
ADD COLUMN     "specifications" JSONB;

-- CreateTable
CREATE TABLE "public"."activities" (
    "id" TEXT NOT NULL,
    "type" "public"."ActivityType" NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."activities" ADD CONSTRAINT "activities_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."activities" ADD CONSTRAINT "activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
