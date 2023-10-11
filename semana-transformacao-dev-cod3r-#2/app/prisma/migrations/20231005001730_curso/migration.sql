-- CreateTable
CREATE TABLE "Curso" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);
