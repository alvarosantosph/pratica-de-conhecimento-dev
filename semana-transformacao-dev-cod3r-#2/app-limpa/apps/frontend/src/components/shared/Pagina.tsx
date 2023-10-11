"use client"
import { AppShell, Burger, Group } from "@mantine/core"
import { IconStack2 } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import Mensagens from "./Mensagens"
import MenuPrincipal from "./MenuPrincipal"

export interface PaginaProps {
    admin?: boolean
    children: any
}
export default function Pagina(props: PaginaProps) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header className="flex justify-between items-center">
                <Group h="100%" px="md">
                    <Burger
                        opened={mobileOpened}
                        onClick={toggleMobile}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Burger
                        opened={desktopOpened}
                        onClick={toggleDesktop}
                        visibleFrom="sm"
                        size="sm"
                    />
                    <div className="flex items-center gap-2">
                        <IconStack2 size={30} />
                        <span>App Limpa</span>
                    </div>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <MenuPrincipal />
            </AppShell.Navbar>
            <AppShell.Main className="bg-black">
                {props.children}
                <div className="absolute top-20 right-4">
                    <Mensagens />
                </div>
            </AppShell.Main>
        </AppShell>
    )
}
