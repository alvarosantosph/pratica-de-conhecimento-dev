import { Button } from "@mantine/core"
import { CursoProps } from "rules"
import { IconPencil } from "@tabler/icons-react"

interface ListaCursosProps {
    cursos: CursoProps[]
    selecionarCurso?: (curso: CursoProps) => void
}

export default function ListaCursos(props: ListaCursosProps) {
    function renderizarItens() {
        return props.cursos?.map((curso) => {
            return (
                <tr
                    key={curso.id}
                    className="text-center odd:bg-zinc-800 even:bg-zinc-700"
                >
                    <td className="p-4">{curso.nome}</td>
                    <td className="p-4">{curso.duracao}s</td>
                    <td className="p-4">
                        <Button
                            onClick={() => props.selecionarCurso?.(curso)}
                            variant="gradient"
                            size="xs"
                        >
                            <IconPencil size={20} stroke={1.5} />
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Duração</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{renderizarItens()}</tbody>
        </table>
    )
}
