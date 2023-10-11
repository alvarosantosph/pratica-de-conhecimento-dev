"use client"
import { Button } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import FormularioCurso from "@/components/curso/FormularioCurso"
import ListaCursos from "@/components/curso/ListaCursos"
import useCurso from "@/data/hooks/useCurso"

export default function Page() {
    const { curso, cursos, substituirCurso } = useCurso()

    return (
        <div className="flex flex-col gap-5">
            {curso ? (
                <FormularioCurso />
            ) : (
                <>
                    <div className="flex justify-between">
                        <Button
                            className="self-start"
                            leftSection={<IconPlus size={18} />}
                            onClick={() => substituirCurso({})}
                            variant="gradient"
                            gradient={{ from: 'green', to: 'teal', deg: 90 }}
                        >
                            Novo Curso
                        </Button>
                    </div>
                    <ListaCursos cursos={cursos} selecionarCurso={substituirCurso} />
                </>
            )}
        </div>
    )
}
