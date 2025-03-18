/*
  Warnings:

  - The `status` column on the `Appointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `recurrence` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Recurrence" AS ENUM ('once', 'daily', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('pending', 'completed', 'canceled');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('scheduled', 'completed', 'canceled');

-- CreateEnum
CREATE TYPE "PetType" AS ENUM ('dog', 'cat', 'bird', 'other');

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "status",
ADD COLUMN     "status" "AppointmentStatus" NOT NULL DEFAULT 'scheduled';

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "type",
ADD COLUMN     "type" "PetType" NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "recurrence",
ADD COLUMN     "recurrence" "Recurrence" NOT NULL DEFAULT 'once',
DROP COLUMN "status",
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'pending';
