import { body } from 'express-validator';
import { validateReq } from '../helpers/validateHelper.js';

const validateCreate = [
    body("data").exists().not().isEmpty().isArray().withMessage('El campo "data" debe ser un array'),
    body("data.*.nombre").exists(),
    body("data.*.clasificacion").exists().toInt().isNumeric(),
    body("data.*.esperanza_vida").exists().toInt().isNumeric(),
    body("data.*.peso_promedio").exists().toFloat().isNumeric(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
];

export {validateCreate}