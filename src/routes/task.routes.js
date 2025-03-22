import express from 'express'
import { createTask, deleteOneTask, getAllTask } from '../controllers/task.controller.js'
import { createTaskValidate, deleteTaskOrUpdateValidate } from '../validate/task.validate.js'

const route = express.Router()

route.get('/', getAllTask)
route.post('/', createTaskValidate, createTask)
route.put('/', deleteTaskOrUpdateValidate)
route.delete('/', deleteTaskOrUpdateValidate, deleteOneTask)

export default route