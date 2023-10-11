import CasoDeUso from "../../shared/CasoDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "./RepositorioCurso"

export default class ConsultarCursos implements CasoDeUso<void, Curso[]> {
    constructor(private repo: RepositorioCurso) {}

    async executar(): Promise<Curso[]> {
        return await this.repo.buscarTodos()
    }
}
