"use client"
import { createContext, useCallback, useState } from "react"

export type Mensagem = {
    tipo: "erro" | "sucesso"
    texto: string
    tempo?: number
}

interface MensagemContextProps {
    mensagens: Mensagem[]
    adicionar: (msg: Mensagem) => void
    adicionarSucesso: (texto: string, tempo?: number) => void
    adicionarErro: (texto: string, tempo?: number) => void
    excluir: (msg: Mensagem) => void
}

const MensagemContext = createContext<MensagemContextProps>({} as any)

export function MensagemProvider(props: any) {
    const [mensagens, setMensagens] = useState<Mensagem[]>([])

    const jaExiste = useCallback(
        function (msg: Mensagem) {
            return mensagens.some((m) => m.texto === msg.texto && m.tipo === msg.tipo)
        },
        [mensagens],
    )

    const adicionar = useCallback(
        function (msg: Mensagem) {
            if (jaExiste(msg)) return
            setMensagens((mensagens) => [...mensagens, msg])
            if (msg.tempo) {
                setTimeout(() => excluir(msg), msg.tempo)
            }
        },
        [jaExiste],
    )

    const adicionarSucesso = useCallback(
        function (texto: string) {
            adicionar({ tipo: "sucesso", texto, tempo: 7000 })
        },
        [adicionar],
    )

    const adicionarErro = useCallback(
        function (texto: string) {
            adicionar({ tipo: "erro", texto, tempo: 7000 })
        },
        [adicionar],
    )

    function excluir(msg: Mensagem) {
        setMensagens((mensagens) => mensagens.filter((m) => m !== msg))
    }

    return (
        <MensagemContext.Provider
            value={{
                mensagens,
                adicionar,
                adicionarSucesso,
                adicionarErro,
                excluir,
            }}
        >
            {props.children}
        </MensagemContext.Provider>
    )
}

export default MensagemContext
