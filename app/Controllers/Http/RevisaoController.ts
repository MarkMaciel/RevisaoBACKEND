// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Request } from "@adonisjs/core/build/standalone";

// Questão 04 da lista REVISÂO

export default class RevisaoController {
  ex4({ request }) {
    const salarioMinimo = request.input("salarioMinimo") * 1;
    const horasTrabalhadas = request.input("horasTrabalhadas") * 1;
    const dependentes = request.input("dependentes") * 1;
    const horasExtras = request.input("horasExtras") * 1;

    const valorHora = 0.2 * salarioMinimo;
    const salarioMes = horasTrabalhadas * valorHora;
    const acrescimoDependente = dependentes * 32;
    const valorHoraExtra = horasExtras * (valorHora * 0.5 + valorHora);
    // ou const valorHoraExtra = horasExtras * (valorHora * 1.5)

    const salarioBruto = salarioMes + acrescimoDependente + valorHoraExtra;

    let imposto;

    if (salarioBruto < 2000) {
      imposto = 0;
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
      imposto = 0.1 * salarioBruto;
    } else {
      imposto = 0.2 * salarioBruto;
    }

    const salarioLiquido = salarioBruto - imposto;

    let gratificaçao;

    if (salarioLiquido <= 3500) {
      gratificaçao = 1000;
    } else {
      gratificaçao = 500;
    }

    // const gratificaçao = salarioLiquido <= 3500 ? 1000 : 500;

    const salarioReceber = salarioLiquido + gratificaçao;

    return { salarioReceber };
  }
}
