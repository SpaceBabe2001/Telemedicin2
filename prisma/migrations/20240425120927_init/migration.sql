-- CreateTable
CREATE TABLE "sundhedsData" (
    "id" TEXT NOT NULL,
    "feces" TEXT,
    "food" TEXT,
    "condition" TEXT NOT NULL,

    CONSTRAINT "sundhedsData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sundhedsData" ADD CONSTRAINT "sundhedsData_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
