import express from "express";
import emoji from "node-emoji"
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'


import './dbFirebase.js'

import { router } from './src/routes/router.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())







app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.use(router)




const server = app.listen(PORT,() => {console.log(`${emoji.get('computer')}Server ON port ${PORT}`)})

server.on('error',(error) => console.log(error))