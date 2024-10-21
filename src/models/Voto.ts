import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Afiliado } from "./Afiliado";
import { Candidatura } from "./Candidatura";

export class Voto extends Model {
  public afiliado_id!: number;
  public candidato_id!: number;

}
4
 

export interface VotoI {
    afiliado_id: number;
    candidato_id: number;
}

Voto.init(
  {
    afiliado_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: Afiliado,
          key: "id"
        },
    },
    candidato_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Candidatura,
          key: "id"
        }
    }
  },
  {
    tableName: "votos",
    sequelize: database,
    timestamps: true
  }
);
Voto.belongsTo(Candidatura, {foreignKey: "candidatura_id"})
Voto.belongsTo(Afiliado, {foreignKey: "afiliado_id"})
