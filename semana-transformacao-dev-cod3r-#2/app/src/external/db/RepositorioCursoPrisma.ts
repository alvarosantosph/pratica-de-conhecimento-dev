import { PrismaClient } from "@prisma/client"
import Curso from "../../rules/curso/model/Curso"
import RepositorioCurso from "../../rules/curso/service/RepositorioCurso"

export default class RepositorioCursoPrisma implements RepositorioCurso {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async salvar(curso: Curso): Promise<void> {
        const dados = {
            id: curso.id.valor,
            nome: curso.nome.completo,
            duracao: curso.duracao.emSegundos,
        }
        await this.prisma.curso.upsert({
            where: { id: curso.id.valor },
            create: dados,
            update: dados,
        })
    }

    async buscarTodos(): Promise<Curso[]> {
        return this.prisma.curso.findMany().then((cursos) =>
            cursos.map(
                (curso) =>
                    new Curso({
                        id: curso.id,
                        nome: curso.nome,
                        duracao: curso.duracao,
                    })
            )
        )
    }
}
