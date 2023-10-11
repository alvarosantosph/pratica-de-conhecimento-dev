export default interface CasoDeUso<E, S> {
    executar(entrada: E): Promise<S>
}
