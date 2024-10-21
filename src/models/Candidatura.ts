import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Candidatura extends Model {
  public nombre_candidatura!: string;
}
4
 

export interface CandidaturaI {
    nombre_candidatura: string;
}

Candidatura.init(
  {
    nombre_candidatura: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "candidatos",
    sequelize: database,
    timestamps: true
  }
);
