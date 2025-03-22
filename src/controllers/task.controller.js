import { matchedData } from "express-validator";
import { response } from "../utils/response.js";
import { errorResponse } from "../utils/errorResponse.js";

let Task = [
    {
        name: "John",
        description: "Sample task",
        teacher: "Juan",
    },
];

export const createTask = async (req, res) => {
    try {
        const body = matchedData(req);
        if (!body.name || !body.description || !body.teacher) {
            return errorResponse(res, 400, "All fields are required");
        }
        Task.push(body);
        response(res, 201, { message: "Task created successfully", task: body });
    } catch (error) {
        errorResponse(res, 500, error.message || "Internal Server Error");
    }
};

export const getAllTask = async (req, res) => {
    try {
        response(res, 200, Task);
    } catch (error) {
        errorResponse(res, 500, error.message || "Internal Server Error");
    }
};

export const updateOneTask = async (req, res) => {
    try {
        const newTask = matchedData(req);
        const index = Task.findIndex((e) => e.name === newTask.name);
        if (index === -1) {
            return errorResponse(res, 404, "Task not found");
        }
        Task[index] = { ...Task[index], ...newTask };
        response(res, 200, { message: "Task updated successfully", task: Task[index] });
    } catch (error) {
        errorResponse(res, 500, error.message || "Internal Server Error");
    }
};

export const deleteOneTask = async (req, res) => {
    try {
        const { name } = matchedData(req);
        const initialLength = Task.length;
        Task = Task.filter((e) => e.name !== name);
        
        if (Task.length === initialLength) {
            return errorResponse(res, 404, "Task not found");
        }

        response(res, 200, { message: "Task deleted successfully" });
    } catch (error) {
        errorResponse(res, 500, error.message || "Internal Server Error");
    }
};
