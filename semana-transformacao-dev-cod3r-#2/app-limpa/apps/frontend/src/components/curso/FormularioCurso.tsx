import { Button, Divider, NumberInput, TextInput } from "@mantine/core"
import useCurso from "@/data/hooks/useCurso"

export default function FormularioCurso() {
    const { curso, salvarCurso, substituirCurso } = useCurso()

    function alterarAtributo(atributo: string) {
        return (e: any) =>
            substituirCurso({
                ...curso,
                [atributo]: e.target?.value ?? e,
            })
    }

    return (
        <div className="flex flex-col gap-3">
            <span className="text-2xl font-black">Formulário de Curso</span>
            <TextInput
                label="Nome"
                value={curso?.nome ?? ""}
                onChange={alterarAtributo("nome")}
            />
            <NumberInput
                label="Duração"
                value={curso?.duracao ?? 0}
                onChange={alterarAtributo("duracao")}
                allowNegative={false}
            />
            <div className="py-3">
                <Divider />
            </div>
            <div className="flex gap-3">
                <Button
                    onClick={() => salvarCurso(curso!)}
                    className="bg-blue-500 p-2 rounded"
                >
                    Salvar
                </Button>
                <Button
                    onClick={() => substituirCurso(null)}
                    className="bg-zinc-500 p-2 rounded"
                    color="gray"
                >
                    Cancelar
                </Button>
            </div>
        </div>
    )
}
