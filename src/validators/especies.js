import { check } from 'express-validator';
import { validateReq } from '../helpers/validateHelper.js';

const validateCreate = [
    check("data").exists().not().isEmpty().isArray().withMessage('El campo "data" debe ser un array'),
    check("data.*.nombre").exists(),
    check("data.*.clasificacion").exists().toInt().isNumeric(),
    check("data.*.esperanza_vida").exists().toInt().isNumeric(),
    check("data.*.peso_promedio").exists().toFloat().isNumeric(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
];

export {validateCreate}