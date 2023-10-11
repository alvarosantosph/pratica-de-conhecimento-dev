import CasoDeUso from "../../shared/CasoDeUso"
import Curso from "../model/Curso"
import RepositorioCurso from "./RepositorioCurso"

export default class SalvarCurso implements CasoDeUso<Curso, void> {
    constructor(private repo: RepositorioCurso) {}

    async executar(curso: Curso): Promise<void> {
        await this.repo.salvar(curso)
    }
}
