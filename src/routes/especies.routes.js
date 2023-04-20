import { Router } from "express";
import { methods as especieController } from "./../controllers/especies.controllers.js";
import { validateCreate, validateParams, validateUpdate } from "./../validators/especies.js";
const router = Router();

router.get("/api/1.0/getAllEspecies", especieController.getEspecies);

router.get("/api/1.0/getEspeciesById/:id", validateParams, especieController.getEspeciesById);

router.post("/api/1.0/insertEspecie", validateCreate, especieController.insertEspecie);

router.put("/api/1.0/updateEspecieById/:id", validateUpdate, especieController.updateEspecieById);

router.delete("/api/1.0/deleteEspecieById/:id", validateParams, especieController.deleteEspecieById);

export default router;
