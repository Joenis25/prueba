import { Request, Response, Application, Router } from "express";

import { VotoController } from '../controllers/voto.controller';

export class VotoRoutes {
    public votoController: VotoController =  new VotoController();

    public routes(app: Application): void {
        app.route("/votos/test").get(this.votoController.test)
        app.route("/votos").get(this.votoController.getAllVoto)
        app.route("/votos/:id").get(this.votoController.getOneVoto)
        app.route("/votos").post(this.votoController.createVoto)
        app.route("/votos/:id").patch(this.votoController.updateVoto)
        app.route("/votos/:id").delete(this.votoController.deleteVoto)

    }
}
