import dotenv from "dotenv"
import config from 'config'
import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import './shared/container'
import { routes } from "./routes"
import { middlewareOfError } from "./middlewares/error"

dotenv.config()
const app = express()
const port = config.get('port')

app.use(express.json())

app.use(routes)

app.use(middlewareOfError)

app.listen(3333, () => console.log(`Server running in port ${port}.`))
