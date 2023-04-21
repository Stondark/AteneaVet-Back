import { Router } from "express";
import { methods as clasificacionController } from "./../controllers/clasificacionanimales.controller.js";
import {validateParams, validateCreate} from "./../validators/clasificacionanimales.js";

const router = Router();

router.get("/api/1.0/getAllClasificacion", clasificacionController.getClasificacion);

router.get("/api/1.0/getClasificacionById/:id", validateParams, clasificacionController.getClasificacionById);

router.post("/api/1.0/insertClasificacion", validateCreate, clasificacionController.clasificacionanimales);

router.delete("/api/1.0/deleteClasificacionById/:id", validateParams, clasificacionController.deleteClasificacionById);

export default router;
