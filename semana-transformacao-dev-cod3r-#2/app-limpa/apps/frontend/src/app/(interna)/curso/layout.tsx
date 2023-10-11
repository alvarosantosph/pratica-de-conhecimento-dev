import { CursoProvider } from "@/data/contexts/CursoContext"

export default function Layout(props: any) {
    return (
        <div className="flex flex-col p-7">
            <CursoProvider>{props.children}</CursoProvider>
        </div>
    )
}
