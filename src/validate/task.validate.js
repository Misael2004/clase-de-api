import { check } from "express-validator";
import validateResult from "../utils/handleValidate.js";


export const createTaskValidate = [
    check('name').exists().isString().notEmpty(),
    check('teacher').exists().notEmpty().isString(),
    check('date').exists().notEmpty(),
    (res, req, next) => validateResult(req, res, next)
]

export const deleteTaskOrUpdateValidate = [
    check('name').exists().notEmpty(),
    (req, res, next) => validateResult(req, res, next)
]