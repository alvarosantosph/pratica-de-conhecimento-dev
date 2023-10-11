import { NavLink } from "@mantine/core"
import { IconBox, IconHome2 } from "@tabler/icons-react"

export default function MenuPrincipal() {
    return (
        <div>
            <span className="text-xs text-zinc-500">Geral</span>
            <NavLink
                label="Início"
                leftSection={<IconHome2 size={18} stroke={1.5} />}
                href="/"
            />
            <span className="text-xs text-zinc-500">Cadastros</span>
            <NavLink
                label="Cursos"
                leftSection={<IconBox size={18} stroke={1.5} />}
                href="/curso"
            />
        </div>
    )
}
