import CasoDeUso from "../../shared/CasoDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "../provider/RepositorioCurso"

export default class SalvarCurso implements CasoDeUso<Curso, Curso> {
    constructor(private readonly repo: RepositorioCurso) {}

    executar(curso: Curso): Promise<Curso> {
        return this.repo.salvar(curso)
    }
}
