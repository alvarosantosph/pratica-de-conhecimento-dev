import { PrismaClient } from "@prisma/client"
import { Curso, RepositorioCurso } from "rules"

export default class RepositorioCursoPrisma implements RepositorioCurso {
    private readonly prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async obterTodos(): Promise<Curso[]> {
        const cursos = await this.prisma.curso.findMany()
        return cursos.map((p: any) => new Curso(p))
    }

    async salvar(curso: Curso): Promise<Curso> {
        const cursoDB = { ...curso.props, updatedAt: new Date() }
        const novoCurso = await this.prisma.curso.upsert({
            where: { id: curso.id.valor },
            update: cursoDB,
            create: cursoDB as any,
        })
        return new Curso(novoCurso)
    }
}
