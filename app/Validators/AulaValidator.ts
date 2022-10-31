import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turmaId: schema.number([rules.exists({ table: "turmas", column: "id" })]),
    data: schema.date(),
    conteudo: schema.string(),
  });

  public messages: CustomMessages = {};
}
