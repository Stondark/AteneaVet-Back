import { Router } from "express";
import { methods as clasificacionController } from "./../controllers/clasificacionanimales.controller.js";
import {validateParams} from "./../validators/clasificacionanimales.js";

const router = Router();

router.get("/api/1.0/getAllClasificacion", clasificacionController.getClasificacion);

router.get("/api/1.0/getClasificacionById/:id", validateParams, clasificacionController.getClasificacionById);

// router.post("/api/1.0/insertEspecie", validateCreate, clasificacionController.insertEspecie);

// router.put("/api/1.0/updateEspecieById/:id", validateUpdate, clasificacionController.updateEspecieById);

// router.delete("/api/1.0/deleteEspecieById/:id", validateParams, clasificacionController.deleteEspecieById);

export default router;
