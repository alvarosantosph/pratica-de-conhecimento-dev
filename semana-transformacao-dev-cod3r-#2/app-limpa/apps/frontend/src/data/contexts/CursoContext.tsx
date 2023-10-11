"use client"
import { createContext, useCallback, useEffect, useState } from "react"
import { CursoProps } from "rules"
import useApi from "../hooks/useApi"
import useMensagens from "../hooks/useMensagens"

export interface CursoContextProps {
    curso: CursoProps | null
    cursos: CursoProps[]
    substituirCurso: (curso: CursoProps | null) => void
    salvarCurso: (curso: CursoProps) => void
}

const CursoContext = createContext<CursoContextProps>({} as any)

export function CursoProvider({ children }: any) {
    const { httpGet, httpPost } = useApi()
    const { adicionarSucesso } = useMensagens()
    const [curso, setCurso] = useState<CursoProps | null>(null)
    const [cursos, setCursos] = useState<CursoProps[]>([])

    const obterCursos = useCallback(async () => {
        const resp = await httpGet("/cursos")
        setCursos(resp.json)
    }, [httpGet])

    useEffect(() => {
        obterCursos()
    }, [obterCursos])

    async function salvarCurso(curso: CursoProps) {
        const resp = await httpPost("/cursos", curso)
        if (resp.sucesso) {
            adicionarSucesso("Curso salvo com sucesso!")
            await obterCursos()
            setCurso(null)
        }
    }

    return (
        <CursoContext.Provider
            value={{
                curso,
                cursos,
                salvarCurso,
                substituirCurso: setCurso,
            }}
        >
            {children}
        </CursoContext.Provider>
    )
}

export default CursoContext
