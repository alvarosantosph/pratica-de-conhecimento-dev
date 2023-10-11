import Curso from "../model/Curso"

export default interface RepositorioCurso {
    salvar(curso: Curso): Promise<void>
    buscarTodos(): Promise<Curso[]>
}
