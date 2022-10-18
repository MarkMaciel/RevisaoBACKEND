
import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.resource("/cursos", "CursosController").apiOnly();
Route.resource("/disciplinas", "DisciplinasController").apiOnly();
Route.resource("/salas", "SalasController").apiOnly();
Route.resource("/semestres", "SemestresController").apiOnly();
Route.resource("/professores", "ProfessorsController").apiOnly();
Route.resource("/alunos", "AlunosController").apiOnly();
Route.resource("/turmas", "TurmasController").apiOnly();
Route.resource("/turma_alunos", "TurmaAlunosController").apiOnly();
Route.resource("/aulas", "AulasController").apiOnly();
Route.resource("/chamada", "ChamadasController").apiOnly();