import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Voto, VotoI } from '../models/Voto';

export class VotoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Voto')
        } catch (error) {

        }
    }

    public async getAllVoto(req: Request, res:Response){
        try {
            const voto: VotoI[] = await Voto.findAll(
                {
                    //where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({voto})
        } catch (error) {

        }
    }

    public async getOneVoto(req: Request, res:Response): Promise <any>{
        const { id: idParam } = req.params

        try {
            const voto:VotoI | null = await Voto.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (voto){
                res.status(200).json(voto)
            } else return  res.status(300).json({msg: "El Voto no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createVoto(req: Request, res:Response){
        const {
            afiliado_id,
            candidato_id
        } = req.body;

        try {
            let body:VotoI = {
                afiliado_id,
                candidato_id
            } 

            const voto:VotoI = await Voto.create({...body});
            res.status(200).json({voto});

        } catch (error) {

        }

    }

    public async updateVoto(req: Request, res:Response): Promise<any>{
        const { id:pk } = req.params;

        const {
            id,
            afiliado_id,
            candidato_id,

        }= req.body

        try {
            let body:VotoI = {
                afiliado_id,
                candidato_id
            } 

            const votoExist: VotoI | null = await Voto.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!votoExist) return res.status(500).json({msg:"El Voto No existe"})
            await Voto.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const voto: VotoI | null = await Voto.findByPk(pk);
        if(voto) return res.status(200).json({voto})
    }

    public async deleteVoto(req: Request, res:Response): Promise <any>{
        const { id:pk } = req.params;


        try {
            const votoExist: VotoI | null = await Voto.findByPk(pk);
            if(!votoExist) return res.status(500).json({msg:"El Voto No existe"})
            await Voto.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Voto Eliminado"})
        } catch (error) {

        }

    } 


}
