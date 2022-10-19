// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Discplina";


export default class DisciplinasController {
  async index() {
    return await Disciplina.all()
  }
  async store({ request }) {
    const dados = request.only(["nome", "cursoId"]);
    return await Disciplina.create(dados);
  }
  async show({ request }) {
    const id = request.param("id");
    return await Disciplina.findOrFail(id);
  }
  async destroy({ request }) {
    const id = request.param("id");
    const disciplina = await Disciplina.findOrFail(id);

    disciplina.delete();
  }
  async update({ request }) {
    const id = request.param("id");
    const disciplina = await Disciplina.findOrFail(id);
    const dados = request.only(["nome", "cursoId"]);

    disciplina.merge(dados);

    return await disciplina.save();
  }
}
