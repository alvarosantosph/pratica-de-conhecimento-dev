import Curso from "../model/Curso"

// Porta - Arq. HEX
export default interface RepositorioCurso {
    obterTodos(): Promise<Curso[]>
    salvar(Curso: Curso): Promise<Curso>
}
