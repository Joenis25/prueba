import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Candidatura, CandidaturaI } from '../models/Candidatura';

export class CandidaturaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Candidatura')
        } catch (error) {

        }
    }

    public async getAllCandidatura(req: Request, res:Response){
        try {
            const candidatura: CandidaturaI[] = await Candidatura.findAll(
                {
                    //where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({candidatura})
        } catch (error) {

        }
    }

    public async getOneCandidatura(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const candidatura:CandidaturaI | null = await Candidatura.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (candidatura){
                res.status(200).json(candidatura)
            } else return  res.status(300).json({msg: "El Candidatura no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createCandidatura(req: Request, res:Response){
        const {
            nombre_candidatura
        } = req.body;

        try {
            let body:CandidaturaI = {
                nombre_candidatura
            } 

            const candidatura:Candidatura = await Candidatura.create({...body});
            res.status(200).json({candidatura});

        } catch (error) {

        }

    }

    public async updateCandidatura(req: Request, res:Response): Promise <any>{
        const { id:pk } = req.params;

        const {
            id,
            nombre_candidatura
        }= req.body

        try {
            let body:CandidaturaI = {
                nombre_candidatura
            } 

            const candidaturaExist: CandidaturaI | null = await Candidatura.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!candidaturaExist) return res.status(500).json({msg:"El Candidatura No existe"})
            await Candidatura.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const candidatura: CandidaturaI | null = await Candidatura.findByPk(pk);
        if(candidatura) return res.status(200).json({candidatura})

    }

    public async deleteCandidatura(req: Request, res:Response): Promise<any>{
        const { id:pk } = req.params;


        try {
            const candidaturaExist: CandidaturaI | null = await Candidatura.findByPk(pk);
            if(!candidaturaExist) return res.status(500).json({msg:"El Candidatura No existe"})
            await Candidatura.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Candidatura Eliminado"})
        } catch (error) {

        }

    } 

}
