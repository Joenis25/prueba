import { Request, Response, Application, Router } from "express";

import { AfiliadoController } from '../controllers/afiliado.controller';

export class AfiliadoRoutes {
    public afiliadoController: AfiliadoController =  new AfiliadoController();

    public routes(app: Application): void {
        app.route("/afiliados/test").get(this.afiliadoController.test)
        app.route("/afiliados").get(this.afiliadoController.getAllAfiliado)
        app.route("/afiliados/:id").get(this.afiliadoController.getOneAfiliado)
        app.route("/afiliados").post(this.afiliadoController.createAfiliado)
        app.route("/afiliados/:id").patch(this.afiliadoController.updateAfiliado)
        app.route("/afiliados/:id").delete(this.afiliadoController.deleteAfiliado)

    }
}
