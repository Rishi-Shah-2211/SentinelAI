/*
  Warnings:

  - You are about to drop the column `action` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `resolvedAt` on the `Alert` table. All the data in the column will be lost.
  - You are about to drop the column `riskScore` on the `Alert` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Alert` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `department` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `RiskHistory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `downloads` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `failedLogins` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filesAccessed` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginHour` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `riskScore` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usbInserted` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Alert` table without a default value. This is not possible if the table is not empty.
  - Added the required column `severity` to the `Alert` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_userId_fkey";

-- DropForeignKey
ALTER TABLE "Alert" DROP CONSTRAINT "Alert_userId_fkey";

-- DropForeignKey
ALTER TABLE "RiskHistory" DROP CONSTRAINT "RiskHistory_userId_fkey";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "action",
DROP COLUMN "timestamp",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "downloads" INTEGER NOT NULL,
ADD COLUMN     "failedLogins" INTEGER NOT NULL,
ADD COLUMN     "filesAccessed" INTEGER NOT NULL,
ADD COLUMN     "loginHour" INTEGER NOT NULL,
ADD COLUMN     "riskScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "usbInserted" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Alert" DROP COLUMN "resolvedAt",
DROP COLUMN "riskScore",
DROP COLUMN "status",
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "severity" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "department",
DROP COLUMN "role",
DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "RiskHistory";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
