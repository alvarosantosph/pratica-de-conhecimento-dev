import { useContext } from "react"
import MensagemContext from "../contexts/MensagemContext"

const useMensagens = () => useContext(MensagemContext)
export default useMensagens
