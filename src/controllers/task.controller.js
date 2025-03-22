import { matchedData } from "express-validator"
import { response } from "../utils/response.js"
import { errorResponse } from "../utils/errorResponse.js"

let Task = [{
    name: 'John',
    teacher: 'Juan'
}]


export const createTask = async (req, res) => {
    const body = matchedData(req)
    try {
        const data = Task.push(body)
        response(res, 201, data)
    } catch (error) {
        errorResponse(res, 400, error.message)
    }
}

export const getAllTask = async (req, res) => {
    try {
        response(res, 200, Task)
    } catch (error) {
        errorResponse(res, 400, error.message)
    }
}

export const updateOneTask = async (req, res) => {
    const newTask = matchedData(req)
    try {
        const index = Task.findIndex(e => e.name === newTask.name)
        if (index === -1) {
            return errorResponse(res, 400, 'Something went wrong')
        }

        Task[index] = newTask
        const data = Task[index]
        response(res, 200, data)
    } catch (error) {
        errorResponse(res, 400, error.message)
    }
}

export const deleteOneTask = async (req, res) => {
    const { name } = matchedData(req)
    try {
        Task.filter(e => e.name !== name)
        response(res, 200, Task)
    } catch (error) {
        errorResponse(res, 400, error.message)
    }
}