import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'


import fs from 'fs';
import fetch from 'node-fetch';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit : '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E')
})

const StartServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log('Server is running on port http://localhost:8080')
        })
    } catch (error) {
        console.log(error);
    }
}

StartServer()