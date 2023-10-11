import { useCallback } from "react"
import RespostaApi from "../model/RespostaApi"
import useMensagens from "./useMensagens"

export default function useApi() {
    const { adicionarErro } = useMensagens()
    const baseUrl = process.env.NEXT_PUBLIC_API_URL!

    const renderizarErrosSeExistir = useCallback(
        function (err: any) {
            if (!err) return
            if (typeof err === "string") {
                adicionarErro(err)
            } else {
                adicionarErro("Erro desconhecido")
            }
        },
        [adicionarErro],
    )

    const httpGet = useCallback(
        async function (path: string): Promise<RespostaApi> {
            const url = `${baseUrl}${path}`
            const res = await fetch(url)
            const json = await res.json()

            renderizarErrosSeExistir(json.erro)

            return {
                json,
                status: res.status,
                sucesso: statusDeSucesso(res.status),
                erro: json.erro,
            }
        },
        [baseUrl, renderizarErrosSeExistir],
    )

    const httpPost = useCallback(
        async function (path: string, body: any): Promise<RespostaApi> {
            const url = `${baseUrl}${path}`
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
            const json = await res.json()

            renderizarErrosSeExistir(json.erro)

            return {
                json,
                status: res.status,
                sucesso: statusDeSucesso(res.status),
                erro: json.erro,
            }
        },
        [baseUrl, renderizarErrosSeExistir],
    )

    function statusDeSucesso(status: number): boolean {
        return status >= 200 && status < 300
    }

    return { httpGet, httpPost }
}
