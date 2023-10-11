export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-700 rounded p-2 outline-none focus:border border-zinc-500"
        />
    )
}
