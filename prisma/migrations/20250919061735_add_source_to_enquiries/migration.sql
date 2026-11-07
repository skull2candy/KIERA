-- Add source column (nullable)
ALTER TABLE "public"."enquiries" ADD COLUMN "source" TEXT;

-- Add updatedAt column with default value for existing rows
ALTER TABLE "public"."enquiries" ADD COLUMN "updatedAt" TIMESTAMP(3);

-- Set updatedAt to createdAt for existing rows
UPDATE "public"."enquiries" SET "updatedAt" = "createdAt" WHERE "updatedAt" IS NULL;

-- Make updatedAt NOT NULL after setting values
ALTER TABLE "public"."enquiries" ALTER COLUMN "updatedAt" SET NOT NULL;

-- Make projectId nullable
ALTER TABLE "public"."enquiries" ALTER COLUMN "projectId" DROP NOT NULL;
