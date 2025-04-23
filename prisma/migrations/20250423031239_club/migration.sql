/*
  Warnings:

  - You are about to drop the column `clubName` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `major` on the `Club` table. All the data in the column will be lost.
  - Added the required column `creator` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Club_email_key";

-- AlterTable
CREATE SEQUENCE club_id_seq;
ALTER TABLE "Club" DROP COLUMN "clubName",
DROP COLUMN "major",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creator" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('club_id_seq');
ALTER SEQUENCE club_id_seq OWNED BY "Club"."id";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "comments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "owner" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
