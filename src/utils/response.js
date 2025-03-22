export const response = (res, status, data) => {
    res.status(status).send({
        error: false,
        data
    })
}