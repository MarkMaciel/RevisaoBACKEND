import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Aluno from "App/Models/Aluno";

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      {
        nome: "Marcos Maciel",
        cpf: "06248753180",
        matricula: "21114290020",
        email: "marcos.maciel@iesb.edu.br",
        telefone: "61981467652",
        cep: 72251604,
        logradouro: "Qno 06 Conjunto D",
        complemento: "Casa 17",
        numero: "17",
        bairro: "Setor O",
      },
    ]);
  }
}