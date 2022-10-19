import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { dbconnection } from './DB/connection.js'
import userRouter from './modules/users/user.router.js'
import messageRouter from './modules/message/message.router.js'
dotenv.config()
const baseUrl = process.env.BASEURL
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(baseUrl , userRouter)
app.use(baseUrl ,messageRouter)
    
dbconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

