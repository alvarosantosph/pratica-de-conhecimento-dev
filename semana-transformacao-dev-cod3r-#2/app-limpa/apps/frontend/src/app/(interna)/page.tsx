import { IconStack2 } from "@tabler/icons-react"

export default function Home() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center h-96">
            <IconStack2 size={160} stroke={1} className="text-zinc-500" />
            <div className="flex flex-col items-center gap-2">
                <span className="font-black text-zinc-500 text-3xl">Aplicação Limpa</span>
                <span className="text-zinc-500 text-sm w-72 text-center">Explorando uma aplicação fullstack com Arquitetura Limpa</span>
            </div>
        </div>
    )
}
