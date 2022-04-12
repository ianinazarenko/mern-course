import express from 'express'
// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

import dotenv from 'dotenv'
import connectDB from './db/connect.js'

// routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  throw new Error('Error!')
  req.send('Hello and welcome')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

async function start() {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, async () => {
      console.log(`Listenning on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
