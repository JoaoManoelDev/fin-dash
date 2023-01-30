import dotenv from "dotenv"
import express from 'express'
import config from 'config'
import './shared/container'
import { routes } from "./routes"

dotenv.config()
const app = express()

app.use(express.json())

app.use(routes)

const port = config.get('port')

app.listen(3333, () => console.log(`Server running in port ${port}.`))