export const errorResponse = (res, status, message) => {
    res.status(status).send({
        error: true,
        message
    })
}