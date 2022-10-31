import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.string.optional(),
    matricula: schema.string(),

    email: schema.string.optional({}, [rules.email()]),
  });

  public messages: CustomMessages = {};
}
