import { ConsultarCursos } from "rules"
import { Express } from "express"

export default class ConsultarCursosController {
    constructor(
        readonly servidor: Express,
        readonly casoDeUso: ConsultarCursos,
    ) {
        servidor.get("/cursos", async (_, res) => {
            try {
                const cursos = await casoDeUso.executar()
                res.json(cursos.map((c) => c.props))
            } catch (e: any) {
                res.status(400).json({ erro: e.message })
            }
        })
    }
}
