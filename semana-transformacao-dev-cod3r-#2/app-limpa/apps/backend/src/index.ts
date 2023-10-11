import dotenv from "dotenv"
dotenv.config()

import { ConsultarCursos, SalvarCurso } from "rules"
import app from "./external/api/config"
import ConsultarCursosController from "./adapters/ConsultarCursosController"
import RepositorioCursoPrisma from "./external/db/RepositorioCursoPrisma"
import SalvarCursoController from "./adapters/SalvarCursoController"

// --------------------------- Adaptadores (Portas & Adapatadores - Arq. HEX)

const repositorioCurso = new RepositorioCursoPrisma()

// --------------------------- Casos de uso (Regras de negócio APP)

const consultarCursos = new ConsultarCursos(repositorioCurso)
const salvarCurso = new SalvarCurso(repositorioCurso)

// --------------------------- Controladores (Adaptadores)

new ConsultarCursosController(app, consultarCursos)
new SalvarCursoController(app, salvarCurso)
