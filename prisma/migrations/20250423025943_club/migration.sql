-- AlterTable
ALTER TABLE "Stuff" ALTER COLUMN "condition" SET DEFAULT 'good';

-- CreateTable
CREATE TABLE "Club" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clubName" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_email_key" ON "Club"("email");
