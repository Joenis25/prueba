import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Afiliado, AfiliadoI } from '../models/Afiliado';

export class AfiliadoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Afiliado')
        } catch (error) {

        }
    }

    public async getAllAfiliado(req: Request, res:Response): Promise <any>{
        try {
            const afiliado: AfiliadoI[] = await Afiliado.findAll(
                {
                    //where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({afiliado})
        } catch (error) {

        }
    }

    public async getOneAfiliado(req: Request, res:Response): Promise <any>{
        const { id: idParam } = req.params

        try {
            const afiliado:AfiliadoI | null = await Afiliado.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (afiliado){
                res.status(200).json(afiliado)
            } else return  res.status(300).json({msg: "El Afiliado no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createAfiliado(req: Request, res:Response){
        const {
            nombre,
            programa,
            telefono,
            fecha_ingreso
        } = req.body;

        try {
            let body:AfiliadoI = {
                nombre,
                programa,
                telefono,
                fecha_ingreso
            } 

            const afiliado:AfiliadoI = await Afiliado.create({...body});
            res.status(200).json({afiliado});

        } catch (error) {

        }
    }

    public async updateAfiliado(req: Request, res:Response): Promise <any>{
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            programa,
            telefono,
            fecha_ingreso
        }= req.body

        try {
            let body:AfiliadoI = {
                nombre,
                programa,
                telefono,
                fecha_ingreso
            } 

            const afiliadoExist: AfiliadoI | null = await Afiliado.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!afiliadoExist) return res.status(500).json({msg:"El Cliente No existe"})
            await Afiliado.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const afiliado: AfiliadoI | null = await Afiliado.findByPk(pk);
        if(afiliado) return res.status(200).json({afiliado})
    }

    public async deleteAfiliado(req: Request, res:Response): Promise <any>{
        const { id:pk } = req.params;


        try {
            const afiliadoExist: AfiliadoI | null = await Afiliado.findByPk(pk);
            if(!afiliadoExist) return res.status(500).json({msg:"El Afiliado No existe"})
            await Afiliado.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Afiliado Eliminado"})
        } catch (error) {

        }

    } 


}
