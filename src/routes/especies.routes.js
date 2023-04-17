import { Router } from "express";
import { methods as especieController } from "./../controllers/especies.controllers.js";
import { validateCreate, validateParams } from "./../validators/especies.js";

const router = Router();

router.get("/getAllEspecies", especieController.getEspecies);

router.get("/getEspeciesById/:id", validateParams, especieController.getEspeciesById);

router.post("/insertEspecie", validateCreate, especieController.insertEspecie);

export default router;
