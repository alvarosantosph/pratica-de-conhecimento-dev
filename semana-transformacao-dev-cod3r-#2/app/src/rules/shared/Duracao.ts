export default class Duracao {
    constructor(readonly emSegundos: number) {
        if (!emSegundos) throw new Error("Duração é obrigatória")
        if (emSegundos <= 0) throw new Error("Duração deve ser maior que zero")
    }

    get emHorasEMinutos(): string {
        const horas = Math.floor(this.emSegundos / 3600)
        const minutos = Math.floor((this.emSegundos - (horas * 3600)) / 60)
        return `${horas}h ${minutos}m`
    }
}
