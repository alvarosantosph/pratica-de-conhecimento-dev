import { IconCheck, IconX } from "@tabler/icons-react"
import { Mensagem } from "@/data/contexts/MensagemContext"
import { Notification } from "@mantine/core"
import useMensagens from "@/data/hooks/useMensagens"

export default function Mensagens() {
    const { mensagens, excluir } = useMensagens()

    function renderizarMensagem(msg: Mensagem) {
        const xIcon = <IconX size={30} />
        const checkIcon = <IconCheck size={30} />
        return (
            <Notification
                title={
                    msg.tipo === "sucesso" ? "Efetuado com sucesso" : "Ocorreu um erro"
                }
                icon={msg.tipo === "sucesso" ? checkIcon : xIcon}
                color={msg.tipo === "sucesso" ? "teal" : "red"}
                onClose={() => excluir(msg)}
                style={{ zoom: 1.3 }}
            >
                {JSON.stringify(msg.texto)}
            </Notification>
        )
    }

    return <div className="flex flex-col gap-2">{mensagens.map(renderizarMensagem)}</div>
}
