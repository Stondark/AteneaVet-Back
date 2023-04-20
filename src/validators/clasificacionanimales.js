import { body, check, param, checkExact } from 'express-validator';
import { validateReq } from '../helpers/validateHelper.js';

const validateParams = [
    check("id").exists().toInt().isInt(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
]

export {
    validateParams
}