export default class NomeSimples {
    constructor(
        readonly completo: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if (min > max)
            throw new Error("Tamanho mínimo não pode ser maior que o máximo")
        if (!completo) throw new Error("Nome é obrigatório")
        if (completo.length < min)
            throw new Error(`Nome deve ter no mínimo ${min} caracteres`)
        if (completo.length > max)
            throw new Error(`Nome deve ter no máximo ${max} caracteres`)
        if (!completo.match(/^[0-9a-zA-Z\u00C0-\u00FF ,]+$/))
            throw new Error("O nome deve conter apenas letras")
    }

    parcial(qtde: number): string {
        return this.completo.substring(0, qtde) ?? ""
    }
}
