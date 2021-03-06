const express = require('express')
const path = require('path')
require('./db/mongoose')

// routers
const adminRouter = require('./routers/admin')
const voterRouter = require('./routers/voter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/admin', adminRouter)
app.use('/vote', voterRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}.`)
})