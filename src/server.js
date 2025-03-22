import express from 'express'
import route from './routes/task.routes.js'

const app = express()

app.use('/task', route)

app.use('*', (req, res) => {
    res.status(200).send('Hi')
})

export default app