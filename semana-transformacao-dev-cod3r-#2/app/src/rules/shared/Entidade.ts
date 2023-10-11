import Id from "./Id";

export default abstract class Entidade {
    readonly id: Id

    constructor(id: string) {
        this.id = new Id(id)
    }

    igual(entidade: Entidade): boolean {
        return this.id.valor === entidade.id.valor
    }

    diferente(entidade: Entidade): boolean {
        return !this.igual(entidade)
    }
}