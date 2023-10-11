import Id from "./Id"

export default abstract class Entidade {
    readonly id: Id
    readonly props: any

    constructor(props: any) {
        this.id = new Id(props.id)
        this.props = { ...props, id: this.id.valor }
    }

    igual(entidade: Entidade): boolean {
        return this.id.valor === entidade.id.valor
    }

    diferente(entidade: Entidade): boolean {
        return !this.igual(entidade)
    }
}
