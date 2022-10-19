import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from "@ioc:Adonis/Lucid/Orm";
import Sala from "./Sala";
import Professore from "./Professore";
import Semestre from "./Semestre";
import Aula from "./Aula";
import TurmaAluno from "./TurmaAluno";
import Disciplina from "./Discplina";

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public professoreId: number;

  @column()
  public semestreId: number;

  @column()
  public disciplinaId: number;

  @column()
  public salaId: number;

  @column()
  public turno: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Sala)
  public sala: BelongsTo<typeof Sala>;

  @hasOne(() => Professore)
  public professor: HasOne<typeof Professore>;

  @belongsTo(() => Semestre)
  public semestre: BelongsTo<typeof Semestre>;

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>;

  @hasMany(() => TurmaAluno)
  public turmaAlunos: HasMany<typeof TurmaAluno>;

  @hasMany(() => Disciplina)
  public disciplina: HasMany<typeof Disciplina>;
}