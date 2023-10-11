import Curso, { CursoProps } from "./model/Curso"
import SalvarCurso from "./service/SalvarCurso"
import ConsultarCursos from "./service/ConsultarCursos"
import RepositorioCurso from "./provider/RepositorioCurso"

export type { CursoProps, RepositorioCurso }
export { Curso, SalvarCurso, ConsultarCursos }
