import { body, check, param, checkExact } from 'express-validator';
import { validateReq } from '../helpers/validateHelper.js';

const validateCreate = [
    check("data").exists().isArray().withMessage('El campo "data" debe ser un array'),
    check("data.*.nombre").exists(),
    check("data.*.clasificacion").exists().toInt().isNumeric(),
    check("data.*.esperanza_vida").exists().toInt().isNumeric(),
    check("data.*.peso_promedio").exists().toFloat().isNumeric(),
    checkExact(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
];

const validateParams = [
    check("id").exists().toInt().isInt(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
]

const validateUpdate = [
    param("id").exists().toInt().isNumeric(),
    body("nombre").exists(),
    body("clasificacion").exists().toInt().isNumeric(),
    body("esperanza_vida").exists().toInt().isNumeric(),
    body("peso_promedio").exists().toFloat().isNumeric(),
    checkExact(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
    
]

export {
    validateCreate,
    validateParams,
    validateUpdate
}