import { Express } from "express"
import { Curso, SalvarCurso } from "rules"

export default class SalvarCursoController {
    constructor(
        readonly servidor: Express,
        readonly casosDeUso: SalvarCurso,
    ) {
        servidor.post("/cursos", async (req, res) => {
            try {
                const curso = await casosDeUso.executar(
                    new Curso({
                        ...req.body,
                        duracao: +req.body.duracao,
                    }),
                )
                res.json(curso.props)
            } catch (e: any) {
                res.status(400).json({ erro: e.message })
            }
        })
    }
}
