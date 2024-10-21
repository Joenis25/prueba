import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Afiliado extends Model {
  public nombre!: string;
  public programa!: string;
  public telefono!: string;
  public fecha_ingreso!: Date;
}
4
 

export interface AfiliadoI {
    nombre: string;
    programa: string;
    telefono: string;
    fecha_ingreso: Date;
}

Afiliado.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      programa: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false
      },
  },
  {
    tableName: "afiliados",
    sequelize: database,
    timestamps: true
  }
);
