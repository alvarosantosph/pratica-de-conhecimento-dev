import Curso from "../../rules/curso/model/Curso"
import RepositorioCurso from "../../rules/curso/service/RepositorioCurso"

export default class RepositorioCursoMemoria implements RepositorioCurso {
    constructor(private cursos: Curso[] = []) {}

    async salvar(curso: Curso) {
        this.cursos.push(curso)
    }

    async buscarTodos() {
        return this.cursos
    }
}
