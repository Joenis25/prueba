import { Request, Response, Application, Router } from "express";

import { CandidaturaController } from '../controllers/candidatura.controller';

export class CandidaturaRoutes {
    public candidaturaController: CandidaturaController =  new CandidaturaController();

    public routes(app: Application): void {
        app.route("/candidatos/test").get(this.candidaturaController.test)
        app.route("/candidatos").get(this.candidaturaController.getAllCandidatura)
        app.route("/candidatos/:id").get(this.candidaturaController.getAllCandidatura)
        app.route("/candidatos").post(this.candidaturaController.createCandidatura)
        app.route("/candidatos/:id").patch(this.candidaturaController.updateCandidatura)
        app.route("/candidatos/:id").delete(this.candidaturaController.deleteCandidatura)

    }
}
