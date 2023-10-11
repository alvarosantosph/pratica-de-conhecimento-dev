import CasoDeUso from "../../shared/CasoDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "../provider/RepositorioCurso"

export default class ConsultarCursos implements CasoDeUso<void, Curso[]> {
    constructor(private readonly repo: RepositorioCurso) {}

    executar(): Promise<Curso[]> {
        return this.repo.obterTodos()
    }
}
