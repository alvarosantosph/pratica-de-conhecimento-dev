import { v4 as uuidv4, validate } from "uuid"

export default class Id {
    constructor(readonly valor: string = uuidv4()) {
        if (!validate(valor)) throw new Error("Id inválido")
    }
}
