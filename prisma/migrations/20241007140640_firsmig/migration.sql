-- CreateTable
CREATE TABLE "Spending" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Spending_pkey" PRIMARY KEY ("id")
);
